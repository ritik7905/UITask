import React, { } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutScreen from './pages/about';
import HomeScreen from './pages/home';

const AppRouter = () => {
  return (
    <div className="main-router-page">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
