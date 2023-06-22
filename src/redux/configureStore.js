import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import employeeHandler from './employee';

const rootReducer = combineReducers({
  employeeHandler
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
