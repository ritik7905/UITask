import { Col, Row } from "antd";
import React from "react";
import SideInfo from "../Others";
import Tab from "../Tabs";
import "./style.scss";

const HeaderPrimary = () => {
  return (
    <div className="header-primary">
      <Row>
        <Col sm={6}>
          <img src={require("../../assets/logo/logo_1.png")} alt="" />
        </Col>
        <Col sm={12}>
          <Tab text1 = "Groups" text2 = "Messages" text3 = "Video Calls" />
        </Col>
        <Col sm={6}>
          <SideInfo />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPrimary;
