import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = ({ singleMission }) => {
  const {
    id, mission, description, reserved,
  } = singleMission;
  return (
    <tr id={id}>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        <button type="button">
          {reserved ? 'Active member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td>
        <button type="button">
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  singleMission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SingleMission;
