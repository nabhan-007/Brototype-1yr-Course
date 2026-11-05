// AUTH slice: who is logged in. Token + user live HERE (Redux = UI truth),
// localStorage keeps them alive across refresh (Redux state is memory — refresh would lose it).
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const register = createAsyncThunk('auth/register', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/api/auth/register', payload);
    return data; // { success, data: {id, email, name} }
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Registration failed');
  }
});

export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/api/auth/login', payload);
    localStorage.setItem('olx-token', data.token);
    localStorage.setItem('olx-user', JSON.stringify(data.user));
    return data; // { token, user }
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('olx-token');
  localStorage.removeItem('olx-user');
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('olx-user') || 'null'),
    token: localStorage.getItem('olx-token'),
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (s) => { s.loading = true; s.error = null; })
      .addCase(login.fulfilled, (s, a) => { s.loading = false; s.user = a.payload.user; s.token = a.payload.token; })
      .addCase(login.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
      .addCase(logout.fulfilled, (s) => { s.user = null; s.token = null; })
      .addCase(register.pending, (s) => { s.loading = true; s.error = null; })
      .addCase(register.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
      .addCase(register.fulfilled, (s) => { s.loading = false; }),
});

export default authSlice.reducer;
