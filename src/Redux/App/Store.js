import { configureStore } from '@reduxjs/toolkit';
import SignupReducer from '../Slices/Auth/SignupSlice.js';

const store = configureStore({
  reducer: {
    signup : SignupReducer
  },
})

export default store;