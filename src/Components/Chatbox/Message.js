import { Avatar } from "@material-ui/core";
import React from "react";

import "./Message.css";

function Message({ send }) {
  return (
    <>
      {send === "no" ? (
        <div className="message">
          <div className="message__chat">
            <p className="message__name">Lorem</p>
            <p>Lorem ipsum dolor sit amet. lorem20</p>
          </div>
          <div className="message__time">12:00</div>
        </div>
      ) : (
        <div className="message__send">
          <div className="message__chat__send">
            <p className="message__name__send">Lorem</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="message__time__send">12:00</div>
        </div>
      )}
    </>
  );
}

export default Message;
