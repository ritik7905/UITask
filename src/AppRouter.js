import React, { } from 'react';
import { BrowserRouter as Router, Route, Routes, browserHistory } from 'react-router-dom';
import LayoutPrimary from './common/layoutPrimary';

// Pages
import VideoCallScreen from './pages/group';
import GroupScreen from './pages/group';
import MessageScreen from './pages/message';

const AppRouter = () => {
  return (
    <div className="main-router-page">
      <Router>
        <LayoutPrimary>
          <Routes>
            <Route path="/" element={<MessageScreen />} />
            <Route path="/group" element={<GroupScreen />} />
            <Route path="/call" element={<VideoCallScreen />} />
          </Routes>
        </LayoutPrimary>
      </Router>
    </div>
  );
};

export default AppRouter;
