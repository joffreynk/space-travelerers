// rockets-profile.js

import { useSelector } from 'react-redux';
import '../../index.css';

const MissionsProfile = () => {
  const missions = useSelector((store) => store.missions);
  const newMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="pf-container">
      <h2 className="pf-title">My Missions</h2>
      <table className="pf-table">
        <tbody className="pf-item-list">
          {newMissions.map((mission) => <tr className="pf-item" key={mission.id}><td className="pf-item-name">{mission.mission}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsProfile;
