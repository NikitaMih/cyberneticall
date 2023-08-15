import { configureStore } from '@reduxjs/toolkit';
import reports from './slices/reportSlice';

const store = configureStore({
  reducer: {
    reports
  }
});

export default store;
