// THE STORE — one object holding ALL global state (auth + products + cart + checkout).
// configureStore = Redux Toolkit's store builder; these reducers become use-selected "slices".
// THE M14 ANSWER: "What is a store?" — the single source of truth the whole app subscribes to.
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import checkoutReducer from './slices/checkoutSlice';

// Redux state lives in memory — a reload would empty the cart. Mirror it in localStorage instead.
const CART_KEY = 'olx-cart';
const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return []; // corrupt value — start clean rather than crash the whole app
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
  preloadedState: { cart: { items: loadCart() } },
});

// Every dispatch re-saves the cart, so refresh keeps it and logout (which clears it) empties storage too.
store.subscribe(() => {
  localStorage.setItem(CART_KEY, JSON.stringify(store.getState().cart.items));
});

export default store;
