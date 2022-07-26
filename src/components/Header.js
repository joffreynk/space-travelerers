// header.js

import { NavLink } from 'react-router-dom';
import '../index.css';
import logo from '../planet.png';

const Navbar = () => (
  <div className="header">
    <div className="logo-title">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="header-title">
        JJF`s ST Hub
      </h1>
    </div>
    <div className="menu">
      <ul>
        <li>
          {' '}
          <NavLink to="/">Rockets</NavLink>
          {' '}
        </li>
        <span>|</span>
        <li>
          <NavLink to="/missions">Missions</NavLink>
          {' '}
        </li>
        <span>|</span>
        <li>
          <NavLink to="/dragons">Dragons</NavLink>
          {' '}
        </li>
        <span>|</span>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
          {' '}
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
