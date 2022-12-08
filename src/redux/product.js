import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRegion = createAsyncThunk("header/getRegion", async () => {
  const response = await axios.get(`${process.env.REACT_APP_HOST}`);
  return response.data;
});

const headerSlice = createSlice({
  name: "header",

  initialState: {
    isLoading: false,
    isError: false,
    region: [],
  },

  extraReducers: {
    [getRegion.pending]: (state) => {
      state.isLoading = true;
    },
    [getRegion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.region = action.payload;
    },
    [getRegion.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default headerSlice.reducer;
