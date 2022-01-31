import React from "react";
import { Tabs } from "antd";
import {
  CommentOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import GroupData from "../Groups";

const { TabPane } = Tabs;

const Tab = (props) => {
  function callback(key) {
    console.log(key);
  }

  const styles = {
    color: "#E8887E",
  };
  return (
    <>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane
          tab={
            <span>
              <UsergroupDeleteOutlined style={styles} />
              {props.text1}
            </span>
          }
          key="1"
        >
          <GroupData text="Hello, I am group section!" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <CommentOutlined style={styles} />
              {props.text2}
            </span>
          }
          key="2"
        >
          <GroupData text="Hello, I am Message section!" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <VideoCameraOutlined style={styles} />
              {props.text3}
            </span>
          }
          key="3"
        >
          <GroupData text="Hello, I am Video Calls section!" />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Tab;
