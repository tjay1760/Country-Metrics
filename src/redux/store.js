import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/countrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
