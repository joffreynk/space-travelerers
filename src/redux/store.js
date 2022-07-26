import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsReducer';

const reducer = combineReducers(
  {
    missions: missionsSlice.reducer,
  },
);

const store = configureStore({ reducer });

export default store;
