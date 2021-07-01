import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = ({disconnectCall, isChatWindow, setChatWindow}) => {
  return (
    <div className="footer-item">
      <div className="left-item">
      </div>
      <div className="center-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faMicrophone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faVideo} />
        </div>
        <div className="icon-block" onClick = {disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faDesktop} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} onClick = {() => setChatWindow(!isChatWindow)} />
        </div>
      </div>

      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faClosedCaptioning} />
          <p className="title">Turn on captions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
