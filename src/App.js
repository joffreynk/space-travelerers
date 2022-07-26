import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';

import './App.css';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
