import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://restcountries.com/v2/all';
const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export default fetchCountries;
