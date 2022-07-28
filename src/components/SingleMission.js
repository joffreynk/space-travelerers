import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsActionCreator';
import '../index.css';

const SingleMission = ({ singleMission }) => {
  const dispatch = useDispatch();
  const {
    id, mission, description, reserved,
  } = singleMission;
  return (
    <tr id={id} className="row">
      <td className="mission-name">{mission}</td>
      <td className="mission-description">{description}</td>
      <td className="mission-status">
        <span
          className={`${reserved ? 'member-joined' : 'member-not-joined'}`}
        >
          {reserved ? 'Active member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="mission-actions">
        <button
          className={`${reserved ? 'leave-mission' : 'join-mission'}`}
          type="button"
          onClick={() => dispatch(joinMission(id))}
        >
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
