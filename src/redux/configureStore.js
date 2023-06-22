import { configureStore } from '@reduxjs/toolkit';
import employeeHandler from './employees';

const store = configureStore({
  reducer: employeeHandler,
});

export default store;
