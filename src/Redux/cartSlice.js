import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const itemIndex = state.findIndex(
            (cartItem) => cartItem.id === action.payload.id
         );
         if (itemIndex !== -1) {
            state[itemIndex].quantity += 1;
         } else {
            state.push({
               ...action.payload,
               quantity: 1,
            });
         }
      },
      removeFromCart: (state, action) => {
         const itemIndex = state.findIndex(
            (cartItem) => cartItem.id === action.payload.id
         );
         if (itemIndex !== -1) {
            state.splice(itemIndex, 1);
         }
      },

      incrementQuantity: (state, action) => {
         const itemIndex = state.findIndex(
            (cartItem) => cartItem.id === action.payload.id
         );
         if (itemIndex !== -1) {
            state[itemIndex].quantity += 1;
            state[itemIndex].totalPrice =
               state[itemIndex].price * state[itemIndex]?.quantity;
         }
      },

      decrementQuantity: (state, action) => {
         const itemIndex = state.findIndex(
            (cartItem) => cartItem.id === action.payload.id
         );
         if (itemIndex !== -1) {
            if (state[itemIndex].quantity > 1) {
               state[itemIndex].quantity -= 1;
               state[itemIndex].totalPrice = state[itemIndex].price * state[itemIndex]?.quantity;
            }
         }
      },
   },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
   cartSlice.actions;

export default cartSlice.reducer;
