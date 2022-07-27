
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsReducer';

const reducer = combineReducers(
  {
    missions: missionsSlice.reducer,
  },
);

const store = configureStore({ reducer });

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export default store;
