import React from "react";
import { ExpandAltOutlined, MessageOutlined } from '@ant-design/icons';


//Styles 
import "./style.scss"


const Zoompart = () => {
    return (<div className="message-top">
        <div className="page-title">
            <MessageOutlined />
            <div className="title">Message</div>
        </div>
        <div className="expand"><ExpandAltOutlined /></div>
    </div>)
}

export default Zoompart;