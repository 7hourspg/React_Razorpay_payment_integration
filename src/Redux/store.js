import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./createSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
   reducer: {
      counterReducer,
      userReducer,
      cartReducer,
   },
});
