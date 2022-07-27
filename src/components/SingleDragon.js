import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reserveDragon, cancelDragon } from '../redux/dragons/dragonSlice';

const SingleDragon = ({
  id, name, type, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        id:
        {id}
      </div>
      <div>
        name:
        {name}
      </div>
      <div>
        type:
        {type}
      </div>
      <div>
        description:
        {description}
      </div>
      <div>
        Image:
        {flickrImages}
      </div>
      <div>

        {reserved === true ? <span>RESERVED</span> : ''}
      </div>
      <div>
        {reserved === false ? (
          <button onClick={() => dispatch(reserveDragon(id))} id={id} type="submit">
            RESERVE DRAGON
          </button>
        ) : (
          <button onClick={() => dispatch(cancelDragon(id))} id={id} type="submit">
            CANCEL DRAGON
          </button>
        )}
      </div>
      <hr />
    </>
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
