import React from "react";
// import { Tabs } from "antd";
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import "./style.scss";
import { Link } from "react-router-dom";

const SidebarPrimary = () => {
  return (
    <>
      <div className="sidebar" style={{ height: "100vh" }}>
        <div className="avatar">
          <div className="img-avtar">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <h4 className="title2">Ritik Sharma</h4>
          <p className="description">
            Life starts at the end of your comfort zone.
          </p>
        </div>
        {/* Bottom Section */}
        <div className="menu-section">
          <div className="btn-style">
            <div className="btn-tab-style active">
              <UsergroupDeleteOutlined />
              <div className="title">Groups</div>
            </div>
            <div className="link-sec">
              <Link to="">Chats</Link>
              <Link to="">Send Messages</Link>
            </div>
          </div>

          <div className="btn-style">
            <div className="btn-tab-style">
              <UsergroupDeleteOutlined />
              <div className="title">Messages</div>
            </div>
            <div className="link-sec">
              <Link to="">History</Link>
              <Link to="">Create groups</Link>
            </div>
          </div>

          <div className="btn-style">
            <div className="btn-tab-style">
              <UsergroupDeleteOutlined />
              <div className="title">Video Calls</div>
            </div>
            <div className="link-sec">
              <Link to="">History</Link>
              <Link to="">Calls</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPrimary;
