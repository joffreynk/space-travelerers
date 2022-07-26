import { createSlice } from '@reduxjs/toolkit';

import { JOIN_MISSION, LEAVE_MISSION } from './missionsActions';

import { getMissions, joinMission, leaveMission } from './missionsActionCreator';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => [...action.payload],

    [joinMission.type === JOIN_MISSION]: (state, action) => state.map((mission) => (
      mission.id === action.payload ? { ...mission, reserved: true } : mission)),

    [leaveMission.type === LEAVE_MISSION]: (state, action) => state.map((mission) => (
      mission.id === action.payload ? { ...mission, reserved: false } : mission)),
  },
});

export default missionsSlice;
