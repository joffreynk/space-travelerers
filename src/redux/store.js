import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DragonReducer from './dragons/dragonSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  dragon: DragonReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
