import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Main from './modules/Main';

const store = configureStore({
  reducer: {
    main: Main,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
