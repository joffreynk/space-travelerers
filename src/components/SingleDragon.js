import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

const SingleDragon = ({
  id, name, type, flickrImages,
}) => (
  <>
    <td>{id}</td>
    <td>{name}</td>
    <td>{type}</td>
    <td>{flickrImages}</td>
  </>
);

SingleDragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default SingleDragon;
