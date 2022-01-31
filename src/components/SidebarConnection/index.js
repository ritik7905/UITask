import React from "react";
// import { Tabs } from "antd";
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import "./style.scss";

const Connections = () => {
  return (
    <>
      <div className="connection">
        <div className="Messages">
          <span>
            <UsergroupDeleteOutlined />
            <h1 className="title4">Messages</h1>
          </span>
          <h4>Chats</h4>
          <h4>Send Messages</h4>
        </div>
        <div className="groups">
          <span>
            <UsergroupDeleteOutlined />
            <h1 className="title4">Messages</h1>
          </span>
          <h4>History</h4>
          <h4>Create groups</h4>
        </div>
        <div className="videoCalls">
          <span>
            <UsergroupDeleteOutlined />
            <h1 className="title4">Messages</h1>
          </span>
          <h4>History</h4>
          <h4>Calls</h4>
        </div>
      </div>
    </>
  );
};

export default Connections;
