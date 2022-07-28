import { configureStore, combineReducers } from '@reduxjs/toolkit';
import DragonReducer from './dragons/dragonSlice';
import missionsSlice from './missions/missionsReducer';

const reducer = combineReducers({
  missions: missionsSlice.reducer,
  dragon: DragonReducer,
});

const store = configureStore({ reducer });

export default store;
