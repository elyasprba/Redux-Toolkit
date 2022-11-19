import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRegion = createAsyncThunk('header/getRegion', async () => {
   const response = await axios.get(`${process.env.REACT_APP_HOST}`);
   let converted = [];
   response.data.results.map((data) => {
      converted = [
         ...converted,
         {
            value: data.name,
            label: data.name,
         },
      ];
   });
   return converted;
});

const headerSlice = createSlice({
   name: 'header',

   initialState: {
      isLoading: false,
      isError: false,
      region: [],
   },

   // reducers: {
   //    setSelectedRegionId: (state, action) => {
   //       state.selectedRegionId = action.payload;
   //    },
   // },

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

// export const { setSelectedRegionId } = headerSlice.actions;
export default headerSlice.reducer;
