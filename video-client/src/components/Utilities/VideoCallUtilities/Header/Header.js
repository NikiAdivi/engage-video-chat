// import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useEffect } from "react";

const Header = ({ setDetailsPopup }) => {
  useEffect(() => {});

  return (
    <div className="frame-header">
      <div className="invite-item" onClick={() => setDetailsPopup(true)}>
        <div className="icon-block">
          <div className="text-box">Invite</div>
          <FontAwesomeIcon className="icon" icon={faAngleDown} />
        </div>
      </div>
    </div>
  );
};

export default Header;
