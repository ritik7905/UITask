import React from "react";
// import { Tabs } from "antd";
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import "./style.scss";

const SidebarPrimary = () => {
  return (
    <>
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
          <div className="connection">
            <div className="Messages btn">
              <span>
                <UsergroupDeleteOutlined />
                <h1 className="title4">Groups</h1>
              </span>
              <p>Chats</p>
              <p>Send Messages</p>
            </div>
            <div className="groups btn">
              <span>
                <UsergroupDeleteOutlined />
                <h1 className="title4">Messages</h1>
              </span>
              <p>History</p>
              <p>Create groups</p>
            </div>
            <div className="videoCalls btn">
              <span>
                <UsergroupDeleteOutlined />
                <h1 className="title4">Video Calls</h1>
              </span>
              <p>History</p>
              <p>Calls</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPrimary;
