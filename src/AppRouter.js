import React, { } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LayoutPrimary from './common/layoutPrimary';




// Pages
import GroupScreen from './pages/group';
import MessageScreen from './pages/message';
import VideoCallScreen from './pages/videoCall';



const AppRouter = () => {
  return (
    <div className="main-router-page">
      <Router>
        <LayoutPrimary>
          <Routes>
            <Route path="/group" element={<GroupScreen />} />
            <Route path="/" element={<MessageScreen />} />
            <Route path="/call" element={<VideoCallScreen />} />
          </Routes>
        </LayoutPrimary>
      </Router>
    </div>
  );
};

export default AppRouter;
