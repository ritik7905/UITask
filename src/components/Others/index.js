import React from "react";
import {
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";

import "./style.scss";
const SideInfo = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a>1st menu item</a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />}>
        <a>2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a>3rd menu item</a>
      </Menu.Item>
      <Menu.Item>a danger item</Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="userInfo">
        <div className="question">
          <QuestionCircleOutlined />
        </div>
        <div className="bell_icon">
          <BellOutlined />
        </div>
        <div className="left">
          <div className="avatar">
            <Avatar size={55} icon={<UserOutlined />} />
          </div>
          <div className="lists">
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link title1"
                onClick={(e) => e.preventDefault()}
              >
                Ritik Sharma <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideInfo;
