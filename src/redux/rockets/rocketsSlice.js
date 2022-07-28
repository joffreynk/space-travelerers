// rocketsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { RESERVE_ROCKET } from './rocketsActions';
import { getRockets } from './rocketsAC';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => [...action.payload],
    [RESERVE_ROCKET]: (state, action) => (
      state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: !rocket.reserved } : rocket
      ))),
  },
});

export default rocketsSlice;
