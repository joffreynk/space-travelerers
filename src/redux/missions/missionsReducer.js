import { createSlice } from '@reduxjs/toolkit';

import { JOIN_LEAVE_MISSION } from './missionsActions';

import { getMissions } from './missionsActionCreator';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => [...action.payload],

    [JOIN_LEAVE_MISSION]: (state, action) => (
      state.map((mission) => (
        mission.id === action.payload ? { ...mission, reserved: !mission.reserved } : mission
      ))),
  },
});

export default missionsSlice;
