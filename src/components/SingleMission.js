import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsActionCreator';

const SingleMission = ({ singleMission }) => {
  const dispatch = useDispatch();
  const {
    id, mission, description, reserved,
  } = singleMission;
  return (
    <tr id={id} className="row">
      <td className="mission-name">{mission}</td>
      <td className="mission-description">{description}</td>
      <td className={`member ${reserved ? 'joined' : 'notJoined'}`}>
        {reserved ? 'Active member' : 'NOT A MEMBER'}
      </td>
      <td className={`missionAction ${reserved ? 'joined' : 'notJoined'}`}>
        <button type="button" onClick={() => dispatch(joinMission(id))}>
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
