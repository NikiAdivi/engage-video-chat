// import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faAngleDown,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useEffect } from "react";

const Header = ({setDetailsPopup}) => {

  // let interval = null;

  // useEffect(() => {
  //   interval = setInterval(() => setCurrentTime(formatDate()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    
  })

  return (
    <div className="frame-header">
      <div className="invite-item" onClick = {() => setDetailsPopup(true)}>
        <div className="icon-block">
          <div className="text-box">Invite</div>
          <FontAwesomeIcon className="icon" icon={faAngleDown} />
        </div>
      </div>
      {/* <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faUserFriends} />
      </div> */}
      {/* <div
        className="header-items icon-block"
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
      >
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        {!isMessenger && messageAlert.alert && (
          <span className="alert-circle-icon"></span>
        )}
      </div>
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div> */}
    </div>
  );
};

export default Header;
