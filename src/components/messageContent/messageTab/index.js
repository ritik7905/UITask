import React from 'react'
import { Tabs } from 'antd'
import { EyeFilled, BarChartOutlined } from '@ant-design/icons'
//Styles
import './style.scss'

const { TabPane } = Tabs

const MessageTab = () => {
  return (
    <div className="message-tab">
      <Tabs defaultActiveKey="1" className='tabs'>
        <TabPane
          tab={
            <span>
            
          <EyeFilled />
              Tab 1
            </span>
          }
          key="1"
        >
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
    </div>
  )
}

export default MessageTab
