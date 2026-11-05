// The ONE axios instance for the whole app.
// The interceptor reads the token from localStorage and adds "Authorization: Bearer <token>"
// to every request automatically — no page needs to remember it.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('olx-token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// A 401 anywhere (invalid or EXPIRED token) → wipe the stale login and go back to /login.
// Exception: /login itself — a wrong password 401s, and we must NOT reload that page.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && window.location.pathname !== '/login') {
      localStorage.removeItem('olx-token');
      localStorage.removeItem('olx-user');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
