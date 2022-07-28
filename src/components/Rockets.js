// Rockets.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsAC';
import RocketData from './RocketData';
import '../index.css';

const Rockets = () => {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [dispatch]);
  return (
    <div className="rockets-container">
      <hr />
      <ul className="rockets-list">
        {rockets.map((rocket) => <RocketData key={rocket.id} rocketData={rocket} />)}
      </ul>
    </div>
  );
};

export default Rockets;
