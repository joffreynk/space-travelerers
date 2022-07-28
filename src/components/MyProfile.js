import React from 'react';
import RocketsProfile from './my-profile/rockets-profile';
import '../index.css';

const MyProfile = () => (
  <div className="all-profiles-container">
    <div className="cp1">
      <RocketsProfile />
    </div>
    <div className="cp2">
      Missions profile
      <RocketsProfile />
    </div>
    <div className="cp3">
      Dragons profile
      <RocketsProfile />
    </div>
  </div>
);

export default MyProfile;
