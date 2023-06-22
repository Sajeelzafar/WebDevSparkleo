import { configureStore } from '@reduxjs/toolkit';
import employeeHandler from './employee';

const store = configureStore({
  reducer: employeeHandler,
});

export default store;
