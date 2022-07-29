import React from 'react';
import RocketsProfile from './my-profile/rockets-profile';
import MissionsProfile from './my-profile/missions-profile';
import DragonsProfile from './my-profile/dragons-profile';
import '../index.css';

const MyProfile = () => (
  <div className="pre-pf-container">
    <hr />
    <div className="all-profiles-container">
      <div className="cp1">
        <RocketsProfile />
      </div>
      <div className="cp2">
        <MissionsProfile />
      </div>
      <div className="cp3">
        <DragonsProfile />
      </div>
    </div>
  </div>
);

export default MyProfile;
