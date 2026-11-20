import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;
