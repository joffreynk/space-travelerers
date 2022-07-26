import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsReducer';

export const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

export default store;
