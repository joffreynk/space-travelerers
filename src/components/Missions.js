import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsActionCreator';
import SingleMission from './SingleMission';
import '../missions.css';

const Missions = () => {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => <SingleMission key={mission.id} singleMission={mission} />)}
      </tbody>
    </table>
  );
};

export default Missions;
