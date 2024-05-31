import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import MyProfile from './MyProfile';
import Instruments from './Instruments';
import History from './History';
import Calculate from './Calculate';
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<MainPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;