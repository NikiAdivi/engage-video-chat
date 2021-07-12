import { useState } from "react";
import "./Chat.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Chat = ({ sendMessage, messageList }) => {
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////      State Variables         ///////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const [message, setMessage] = useState("");

  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////      Utility Functions           /////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const changeInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage(message);
      setMessage("");
    }
  };

  const sendMessageInChat = () => {
    sendMessage(message);
    setMessage("");
  };

  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////           Return Script            ///////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="messenger-container">
      <div className="messenger-header-tabs">
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {messageList.map((item) => (
          <div key={item.time} className="chat-block">
            <div className="sender">{item.user}</div>
            <p className="msg">{item.msg_value}</p>
          </div>
        ))}
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message to everyone"
          value={message}
          onChange={(e) => changeInputMessage(e)}
          onKeyDown={(e) => onEnter(e)}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
          onClick={sendMessageInChat}
        />
      </div>
    </div>
  );
};

export default Chat;
