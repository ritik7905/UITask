import React from "react";
import HeaderPrimary from "../../components/headerPrimary";
import Connections from "../../components/SidebarConnection";

// Styles
import "./styles.scss";

const HomeScreen = () => {
  return (
    <div className="home-page-style">
      <HeaderPrimary />
      <div className="sidebar" style={{ height: "100vh" }}>
        <div className="avatar">
          <img
            src={require("../../assets/logo/avatar.png")}
            style={{ width: "100%" }}
            alt=""
          />
          <h4 className="title2">Ritik Sharma</h4>
          <p className="description">
            Life starts at the end of your comfort zone.
          </p>
        </div>
        {/* Bottom Section */}
          <div className="bottom">
            <Connections />
          </div>
      </div>
    </div>
  );
};

export default HomeScreen;
