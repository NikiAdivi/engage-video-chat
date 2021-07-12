import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faVideoSlash,
  faMicrophone,
  faPhone,
  faDesktopSlash,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = ({
  disconnectCall,
  isChatWindow,
  setChatWindow,
  isAudio,
  toggleAudio,
  isVideo,
  toggleVideo,
  startScreenShare,
  stopScreenShare,
  isPresenting,
}) => {
  return (
    <div className="footer-item">
      <div className="left-item"></div>
      <div className="center-item">
        <div className="icon-block" onClick={() => toggleAudio(!isAudio)}>
          <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className="icon-block" onClick={() => toggleVideo(!isVideo)}>
          <FontAwesomeIcon
            className="icon"
            icon={isVideo ? faVideo : faVideoSlash}
          />
        </div>
        <div className="icon-block" onClick={disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>

        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
          </div>
        ) : (
          <div className="icon-block" onClick={startScreenShare}>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
          </div>
        )}

        <div
          className="icon-block"
          onClick={() => setChatWindow(!isChatWindow)}
        >
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        </div>
      </div>

      <div className="right-item">
        <div className="icon-block">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
