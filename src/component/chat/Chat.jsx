import React, { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(null);
  return (
    <div className="chat">
      <div className="message">
        <h1>Messages</h1>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Kirubha</span>
          <p>Just type your text at here</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              Kirubha
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae own">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae own">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>{" "}
            own
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae own">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae own">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessgae own">
              <p>Hi hellow</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="bottom"></div>
        </div>
      )}
    </div>
  );
};

export default Chat;
