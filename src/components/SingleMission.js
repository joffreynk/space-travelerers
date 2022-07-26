import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = ({
  id, missionName, description, reserved,
}) => (
  <tr id={id}>
    <td>{missionName}</td>
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

SingleMission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default SingleMission;
