// rockets-profile.js

import { useSelector } from 'react-redux';
import '../../index.css';

const DragonsProfile = () => {
  const alldragons = useSelector((state) => state.dragon);
  const newDragons = alldragons.filter((dragon) => dragon.reserved === true);

  return (
    <div className="pf-container">
      <h2 className="pf-title">My Dragons</h2>
      <table className="pf-table">
        <tbody className="pf-item-list">
          {newDragons.map((dragon) => <tr className="pf-item" key={dragon.id}><td className="pf-item-name">{dragon.name}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default DragonsProfile;
