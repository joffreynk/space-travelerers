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
    <tr id={id}>
      <td>{mission}</td>
      <td>{description}</td>
      <td type="button" className={`member ${reserved ? 'joined' : 'notJoined'}`}>
        {reserved ? 'Active member' : 'NOT A MEMBER'}
      </td>
      <td>
        <button type="button" onClick={() => dispatch(joinMission(id))} className={`missionAction ${reserved ? 'joined' : 'notJoined'}`}>
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
