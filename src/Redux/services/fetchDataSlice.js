import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchDataReducer = createAsyncThunk("apiData", async () => {
   const response = await fetch("https://fakestoreapi.com/products");
   const data = await response.json();
   return data;
});

const fetchDataSlice = createSlice({
   name: "fetchData",
   initialState: {
      data: [],
      status: "loading",
      error: null,
   },
   extraReducers: {
      [fetchDataReducer.pending]: (state, action) => {
         state.status = "loading";
      },
      [fetchDataReducer.fulfilled]: (state, action) => {
         state.status = "success";
         state.data = action.payload;
      },
      [fetchDataReducer.rejected]: (state, action) => {
         state.status = "failed";
         state.error = action.error.message;
      },
   },
});

export default fetchDataSlice.reducer;
