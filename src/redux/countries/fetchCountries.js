import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://restcountries.com/v2/all';
const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default fetchCountries;
