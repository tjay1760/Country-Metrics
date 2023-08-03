import { createSlice } from '@reduxjs/toolkit';
import fetchCountries from './fetchCountries';

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    }).addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
