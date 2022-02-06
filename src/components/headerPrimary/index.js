import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import NavActionCard from "../navActionCard";
import Tab from "../Tabs";

import "./style.scss";

const HeaderPrimary = () => {
  return (
    <div className="header-primary">
      <Row>
        <Col sm={6}>
          <Link to="/">
            <img src={require("../../assets/logo/logo_1.png")} alt="" />
          </Link>
        </Col>
        <Col sm={10}>
          <div className="nav-section">
          <Tab text1="Groups" text2="Messages" text3="Video Calls" />
          </div>
        </Col>
        <Col sm={8}>
          <NavActionCard />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPrimary;
