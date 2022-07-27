// RocketData.js

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsAC';

const RocketData = ({ rocketData }) => {
  const dispatch = useDispatch();
  const {
    id,
    rocket,
    description,
    image,
    reserved,
  } = rocketData;

  return (
    <li id={id} className="rocket-card">
      <img className="rocket-image" src={image} alt="rocket-pic" />
      <h2 className="rocket-name">{rocket}</h2>
      <div className="rocket-res-desc">
        <span className={`${reserved ? 'rocket-unavailable' : 'rocket-available'}`}>
          {reserved ? 'Reserved' : ''}
        </span>
        <p className="rocket-description">
          {description}
        </p>
        <button
          type="button"
          onClick={() => dispatch(reserveRocket(id))}
          className={`${reserved ? 'btn-cancel-reservation' : 'btn-reserve-rocket'}`}
        >
          {reserved ? 'CANCEL RESERVATION' : 'RESERVE ROCKET'}
        </button>
      </div>
    </li>
  );
};

RocketData.propTypes = {
  rocketData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketData;
