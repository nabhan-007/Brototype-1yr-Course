// CHECKOUT slice: the POST /api/checkout call + its three states
// (idle → loading → succeeded/failed). Portal: "checkout status: in-progress, success, failure".
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';
import { logout } from './authSlice'; // logout resets this slice's leftovers ("Checkout done" must not leak to the next user)

export const checkout = createAsyncThunk('checkout/pay', async (productIds, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/api/checkout', { productIds });
    return data.data; // { purchased: n }
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Checkout failed');
  }
});

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: { status: 'idle', error: null, purchased: null },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkout.pending, (s) => { s.status = 'loading'; s.error = null; s.purchased = null; })
      .addCase(checkout.fulfilled, (s, a) => { s.status = 'succeeded'; s.purchased = a.payload.purchased; })
      .addCase(checkout.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload; })
      .addCase(logout.fulfilled, (s) => { s.status = 'idle'; s.error = null; s.purchased = null; }),
});

export default checkoutSlice.reducer;
