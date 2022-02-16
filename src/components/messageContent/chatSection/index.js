import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
import MessageTab from '../messageTab'
import arrayData from './data'

// Styles
import './style.scss'

const ChatSection = () => {
  return (
    <div className="chat-section">
      <div className="sidebar">
        <div className="chats">
          <div className="title">Chats</div>
          <div className="lists">29/30</div>
        </div>

        <div className="chat-members">
          {arrayData.map((val) => {
            return (
              <div className="card active">
                <div className="member">
                  <div className="avatar">
                    <img src={val.source} alt="" />
                  </div>
                  <div className="member-info">
                    <div className="title">{val.name}</div>
                    <p className="description">{val.description}</p>
                  </div>
                </div>
                <div className="track">
                  <span className="time">
                    {val.date}
                    <span>|</span> {val.time}
                  </span>
                  <span className="live">
                    <EyeOutlined />
                    {val.live} <span>|</span> {val.cardLists}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="message-box">
        <MessageTab />
      </div>
    </div>
  )
}

export default ChatSection
