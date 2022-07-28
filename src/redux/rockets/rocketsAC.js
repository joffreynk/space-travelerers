// rocketsAC.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ROCKETS, RESERVE_ROCKET } from './rocketsActions';

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await res.json();
  const rocketsData = [];
  rockets.forEach((rocket) => {
    rocketsData.push({
      id: rocket.id,
      rocket: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images,
      reserved: false,
    });
  });
  return rocketsData;
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});
