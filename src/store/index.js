import { configureStore } from '@reduxjs/toolkit';
import Main from './modules/Main';
import userReducer from './modules/user';

const store = configureStore({
  reducer: {
    main: Main,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
