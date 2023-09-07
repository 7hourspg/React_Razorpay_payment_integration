import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import fetchDataReducer from "./services/fetchDataSlice";

export const store = configureStore({
   reducer: {
      cartReducer,
      fetchDataReducer,
   },
});
