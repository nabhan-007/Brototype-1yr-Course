// THE STORE — one object holding ALL global state (auth + products + cart + checkout).
// configureStore = Redux Toolkit's store builder; these reducers become use-selected "slices".
// THE M14 ANSWER: "What is a store?" — the single source of truth the whole app subscribes to.
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import checkoutReducer from './slices/checkoutSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
