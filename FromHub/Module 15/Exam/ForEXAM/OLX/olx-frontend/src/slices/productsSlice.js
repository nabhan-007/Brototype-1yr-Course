// PRODUCTS slice: the listing data + loading/error flags, filled by createAsyncThunk.
// This slice answers pendings: createAsyncThunk, extraReducers, loading/error in Redux.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

// Read all unsold products; args = { category, minPrice, maxPrice } → sent as query parameters
export const fetchProducts = createAsyncThunk('products/fetch', async (filters, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/api/products', { params: filters });
    return data.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Could not load products');
  }
});

// The logged-in user's own listings (Sell page)
export const fetchMine = createAsyncThunk('products/fetchMine', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/api/products/mine');
    return data.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Could not load your listings');
  }
});

// Create a listing (Sell page "Add")
export const createProduct = createAsyncThunk('products/create', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/api/products', payload);
    return data.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Could not create product');
  }
});

// Update a listing (Sell page "Edit")
export const updateProduct = createAsyncThunk('products/update', async ({ id, ...payload }, { rejectWithValue }) => {
  try {
    const { data } = await api.put(`/api/products/${id}`, payload); // path param /entity/<id>
    return data.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Could not update product');
  }
});

// Delete a listing (Sell page). Action id travels as the arg (deletedObj.id) so the reducer can filter it out.
export const deleteProduct = createAsyncThunk('products/delete', async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/api/products/${id}`);
    return id;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Could not delete product');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], mine: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (s) => { s.loading = true; s.error = null; })
      .addCase(fetchProducts.fulfilled, (s, a) => { s.loading = false; s.items = a.payload; })
      .addCase(fetchProducts.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
      .addCase(fetchMine.pending, (s) => { s.loading = true; s.error = null; })
      .addCase(fetchMine.fulfilled, (s, a) => { s.loading = false; s.mine = a.payload; })
      .addCase(fetchMine.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
      .addCase(createProduct.fulfilled, (s, a) => { s.mine = [a.payload, ...s.mine]; })
      .addCase(updateProduct.fulfilled, (s, a) => {
        s.mine = s.mine.map((p) => (p._id === a.payload._id ? a.payload : p));
      })
      .addCase(deleteProduct.fulfilled, (s, a) => {
        s.mine = s.mine.filter((p) => (p._id !== a.payload));
      }),
});

export default productsSlice.reducer;
