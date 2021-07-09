import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faVideoSlash,
  faMicrophone,
  faPhone,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = ({disconnectCall, isChatWindow, setChatWindow, isAudio, toggleAudio, isVideo,toggleVideo}) => {
  return (
    <div className="footer-item">
      <div className="left-item">
      </div>
      <div className="center-item">
        <div className="icon-block" onClick = {() => toggleAudio(!isAudio)}>
          <FontAwesomeIcon className="icon" icon= {isAudio ? faMicrophone: faMicrophoneSlash}  />
        </div>
        <div className="icon-block" onClick = {() => toggleVideo(!isVideo)}>
          <FontAwesomeIcon className="icon" icon={isVideo ? faVideo: faVideoSlash} />
        </div>
        <div className="icon-block" onClick = {disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faDesktop} />
        </div>
        <div className="icon-block" onClick = {() => setChatWindow(!isChatWindow)}>
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        </div>
      </div>

      <div className="right-item">
        <div className="icon-block">
          {/* <FontAwesomeIcon className="icon" icon={faClosedCaptioning} /> */}
          {/* <p className="title">Turn on captions</p> */}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
