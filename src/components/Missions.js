import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((store) => store.missions);
  console.log(missions);
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </table>
  );
};

export default Missions;
