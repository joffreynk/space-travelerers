// header.js

import '../index.css';
import logo from '../planet.png';

export const Navbar = () => (
  <div className="header">
    <div className="logo-title">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="header-title">
        Space Travelers` Hub
      </h1>
    </div>
    <div className="menu">
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <span>|</span>
        <li>My Profile</li>
      </ul>
    </div>
  </div>
);

export default Navbar;
