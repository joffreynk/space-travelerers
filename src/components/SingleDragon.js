import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reserveDragon, cancelDragon } from '../redux/dragons/dragonSlice';
import '../index.css';

const SingleDragon = ({
  id, name, type, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <li id="{id}" className="rocket-card">
      <div className="c1">
        <img className="rocket-image" src={flickrImages} alt="dragon-pic" />
      </div>
      <div className="c2">
        <h2 className="rocket-name">{name}</h2>
        <div className="rocket-res-desc">
          Type: [
          {type}
          ]
        </div>
        <div className="rocket-res-desc">
          <p className="rocket-description">
            {reserved ? <span className="rocket-unavailable">RESERVED</span> : '-'}
            {description}
          </p>
        </div>
        <div>
          {reserved === false ? (
            <button
              className="btn-reserve-rocket"
              onClick={() => dispatch(reserveDragon(id))}
              id={id}
              type="submit"
            >
              RESERVE DRAGON
            </button>
          ) : (
            <button
              className="btn-cancel-reservation"
              onClick={() => dispatch(cancelDragon(id))}
              id={id}
              type="submit"
            >
              CANCEL DRAGON
            </button>
          )}
        </div>
      </div>
      <hr />
    </li>
  );
};

SingleDragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  flickrImages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleDragon;
