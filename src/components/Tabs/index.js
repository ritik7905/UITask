import React from "react";
import { Tabs } from "antd";
import {
  CommentOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
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
          Tab 1
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
          Tab 2
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
          Tab 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default Tab;
