import { useState } from "react";
import "./Chat.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Chat = ({sendMessage, messageList}) => {
  const [message, setMessage] = useState("");

  const handleChangeMsg = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(message);
      setMessage("");
    }
  };

  const handleSendMsg = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="messenger-container">
      {/* <div className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          // onClick={() => {
          //   setIsMessenger(false);
          // }}
        />
      </div> */}

      <div className="messenger-header-tabs">
        {/* <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div> */}
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {messageList.map((item) => (
          <div key={item.time} className="chat-block">
            <div className="sender">
              {item.user}
            </div>
            <p className="msg">{item.msg_value}</p>
          </div>
        ))}
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message to everyone"
          value={message}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
          onClick={handleSendMsg}
        />
      </div>
    </div>
  );
};

export default Chat;
