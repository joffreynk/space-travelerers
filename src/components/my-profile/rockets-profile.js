// rockets-profile.js

import { useSelector } from 'react-redux';
import '../../index.css';

const RocketsProfile = () => {
  const rockets = useSelector((store) => store.rockets);
  const newRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="pf-container">
      <h2 className="pf-title">My Rockets</h2>
      <table className="pf-table">
        <tbody className="pf-item-list">
          {newRockets.map((rocket) => <tr className="pf-item" key={rocket.id}><td className="pf-item-name">{rocket.rocket}</td></tr>) }
        </tbody>
      </table>
    </div>
  );
};

export default RocketsProfile;
