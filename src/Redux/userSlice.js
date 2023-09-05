import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   users: [],
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      addUser: (state, action) => {
         state.users.push(action.payload);
      },
      deleteUser: (state, action) => {
         //     console.log(action.payload);
         state.users = state.users.filter(
            (user) => user.email !== action.payload
         );
      },
   },
});

export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
