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
      {/* <button className="add-people-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button> */}
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
      {/* <div className="permission-text">
        <FontAwesomeIcon className="icon red" icon={faShieldAlt} />
        <p className="small-text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as akshay@gmail.com</p> */}
    </div>
  );
};

export default Details;
