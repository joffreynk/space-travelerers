// import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import SingleDragon from './SingleDragon';

const AllDragons = ({ dragon }) => (
  <ul className="rockets-list">

    {dragon.map((dr) => (

      <SingleDragon
        key={dr.id}
        id={dr.id}
        name={dr.name}
        type={dr.type}
        description={dr.description}
        flickrImages={dr.flickrImages}
        reserved={dr.reserved}
      />

    ))}
  </ul>
);

AllDragons.propTypes = {
  dragon: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
    ]),
  ).isRequired,
};

export default AllDragons;
