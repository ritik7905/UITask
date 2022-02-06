import React from "react";
import { QuestionCircleOutlined, BellOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

//Style
import "./style.scss";

const NavActionCard = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">1st menu item</Link>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />}>
        <Link to="/">2nd menu item</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">3rd menu item</Link>
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
        <div className="right">
          <div className="avatar">
            <Avatar size={35} icon={<UserOutlined />} />
          </div>
          <div className="lists">
            <Dropdown overlay={menu}>
              <Link
                to="/"
                className="ant-dropdown-link title1"
                onClick={(e) => e.preventDefault()}
              >
                Ritik Sharma <DownOutlined />
              </Link>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavActionCard;
