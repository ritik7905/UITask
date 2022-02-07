import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined
} from '@ant-design/icons';

import "./styles.scss"


const Tab = (props) => {

  return (
    <div className="header-tab-style">
      <Menu defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/group"><UserOutlined/> Group</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/"><UserOutlined /> Messages</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/call"><UserOutlined /> Video Call</Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default Tab;
