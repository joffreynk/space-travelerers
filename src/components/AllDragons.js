import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import SingleDragon from './SingleDragon';

const AllDragons = ({ dragon }) => (
  <>
    <table>
      <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>TYPE</td>
        <td>IMAGE</td>
      </tr>

      {dragon.map((dr) => (
        <tr key={dr.id}>
          <SingleDragon
            key={dr.id}
            id={dr.id}
            name={dr.name}
            type={dr.type}
            flickrImages={dr.flickrImages}
          />
        </tr>
      ))}

    </table>
  </>

);

AllDragons.propTypes = {
  dragon: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
    ]),
  ).isRequired,
};

export default AllDragons;
