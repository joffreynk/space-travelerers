// header.js

import '../index.css';
import { Link } from 'react-router-dom';
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
          <Link to="/">Rockets</Link>
          {' '}
        </li>
        <span>|</span>
        <li>
          <Link to="missions">Missions</Link>
          {' '}
        </li>
        <span>|</span>
        <li>
          <Link to="dragons">Dragons</Link>
          {' '}
        </li>
        <span>|</span>
        <li>
          <Link to="my-profile">My Profile</Link>
          {' '}
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
