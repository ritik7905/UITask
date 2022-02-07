import React from 'react'
import { Tabs } from 'antd'
import { EyeFilled, BarChartOutlined } from '@ant-design/icons'

import './style.scss'
import Hello from '../../hello'

const { TabPane } = Tabs

const MessageTab = () => {
  return (
    <div className="message-tab">
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
          <EyeFilled />
              {/* Tab 1 */}
              <Hello/>
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <BarChartOutlined />
              Tab 2
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}

export default MessageTab
