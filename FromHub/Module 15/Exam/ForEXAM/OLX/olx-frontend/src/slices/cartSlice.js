// CART slice: pure client state — add, update quantity, remove, clear after checkout.
// No API calls here: cart lives ONLY in Redux (backend persistence is an optional portal extra, skipped).
import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice'; // logout must also WIPE the cart (else the next user on this tab inherits it)

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (s, a) => {
      const existing = s.items.find((i) => i._id === a.payload._id);
      if (existing) existing.qty += 1;
      else s.items.push({ ...a.payload, qty: 1 });
    },
    updateQty: (s, a) => {
      const { _id, qty } = a.payload;
      if (qty < 1) return; // quantity can never go below 1
      const item = s.items.find((i) => i._id === _id);
      if (item) item.qty = qty;
    },
    removeItem: (s, a) => {
      s.items = s.items.filter((i) => i._id !== a.payload);
    },
    clearCart: (s) => { s.items = []; },
  },
  extraReducers: (builder) =>
    builder
      // Cross-slice reset: logging out empties the cart too — one user's cart must never leak to another.
      .addCase(logout.fulfilled, (s) => { s.items = []; }),
});

export const { addItem, updateQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
