import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Details.scss";

const Details = ({ setDetailsPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Meeting invite link</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setDetailsPopup(false);
          }}
        />
      </div>

      <p className="info-text">
        Share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
    </div>
  );
};

export default Details;
