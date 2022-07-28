import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsActionCreator';
import SingleMission from './SingleMission';
import '../index.css';

const Missions = () => {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  return (
    <table className="missions-container">
      <thead className="missions-head">
        <tr className="missions-titles">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="missions-list">
        {missions.map((mission) => <SingleMission key={mission.id} singleMission={mission} />)}
      </tbody>
    </table>
  );
};

export default Missions;
