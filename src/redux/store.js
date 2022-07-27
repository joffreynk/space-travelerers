import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';

const reducer = combineReducers(
  {
    rockets: rocketsSlice.reducer,
  },
);

export const store = configureStore({ reducer });

export default store;
