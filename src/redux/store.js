import { configureStore } from "@reduxjs/toolkit";

import products from "./products";
import cart from "./cart";
import wishlist from "./wishlist";
import authReducer from "./auth";



export default configureStore({
  reducer: {
    products,
    cartProds: cart,
    wishlistProds:wishlist,
    auth:authReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});