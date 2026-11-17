// The ONE axios instance for the whole app.
// Two jobs: attach the ACCESS token to every request, and refresh it silently when it expires.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  // The refresh token lives in an httpOnly cookie — without this the browser will not send it.
  withCredentials: true,
});

// Images uploaded to the backend are stored as "/uploads/<file>" and the placeholder as "/placeholder.svg".
// The browser would resolve a bare path against the Vite dev server (5173), so prefix the API origin.
// Seed images are full URLs — untouched.
export const fileUrl = (p) => (p?.startsWith('/') ? api.defaults.baseURL + p : p);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('olx-token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 401 handling, in order:
//   1. try ONE silent refresh — the access token dies long before the session does
//   2. if the refresh fails too, the session is really over → wipe and go to /login
// Exception: /login itself — a wrong password 401s, and we must NOT reload that page.
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config || {};
    const isRefreshCall = String(original.url).includes('/api/auth/refresh');

    if (err.response?.status === 401 && !original._retry && !isRefreshCall && window.location.pathname !== '/login') {
      original._retry = true; // one attempt only — a failing refresh must never loop
      try {
        const { data } = await api.post('/api/auth/refresh');
        localStorage.setItem('olx-token', data.token);
        original.headers.Authorization = `Bearer ${data.token}`;
        return api(original); // replay the original request with the new token
      } catch {
        localStorage.removeItem('olx-token');
        localStorage.removeItem('olx-user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  }
);

export default api;
