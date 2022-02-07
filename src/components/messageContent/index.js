import React from "react";
import ChatSection from "./chatSection";
import Zoompart from "./zoomPart";

import "./style.scss"

const MessageContent = () => {
    return (
        <div className="message-contaner">
           <Zoompart/>
           <ChatSection/>
        </div>
    );
};

export default MessageContent;
