import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import DragonReducer from './dragons/dragonSlice';
// import missionsSlice from './missions/missionsReducer';

const rootReducer = combineReducers({
  rockets: rocketsSlice.reducer,
  dragon: DragonReducer,
});

// export const store = configureStore({ reducer });

const store = configureStore({ reducer: rootReducer });

export default store;
