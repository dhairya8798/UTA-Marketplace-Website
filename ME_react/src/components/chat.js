import React from "react";

import '../assets/css/chat.css';

import { NavLink } from "react-router-dom";

class Chat extends React.Component {
    render() {
        return(
        <div className="myChat">
            <a href="http://localhost:8000/" id="chat">
                <img id="icon" src={require("../assets/icons/chat.svg")} alt="chatIcon"/>
            </a>
        </div>
        )
    }
}

export default Chat;