import { configureStore, combineReducers } from '@reduxjs/toolkit';
import DragonReducer from './dragons/dragonSlice';
import missionsSlice from './missions/missionsReducer';
import rocketsSlice from './rockets/rocketsSlice';

const reducer = combineReducers({
  missions: missionsSlice.reducer,
  rockets: rocketsSlice.reducer,
  dragon: DragonReducer,
});

const store = configureStore({ reducer });

export default store;
