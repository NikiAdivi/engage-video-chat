import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import './HomePage.scss'
import HeaderHomePage from "../UI/HeaderHomePage/HeaderHomePage";

const HomePage = () => {
    return (
        <div className="home-page">
            <HeaderHomePage />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <img src="https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" />
                    </div>
                </div>
                <div className="middle-side">
                    <div className="content">
                        <h2>Be Agile!</h2>
                        <h2>Now shift to video calls</h2>
                        <p>
                            Engage with each other using our video call app built using Agile methodology 
                            that focusses on adapting to change. 
                        </p>
                        <p>
                            <a href=""> Learn more </a> about Agile framework
                        </p>
                        <div className="action-btn">
                            <button className="btn purple">
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                Start a New Meeting
                            </button>                      
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Enter a code or link" />
                                </div>
                                <button className="btn purple">Join</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="help-text">
                        <a href="">Learn more</a> about Google Meet
                    </div> */}
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://image.freepik.com/free-vector/group-video-concept-illustration_114360-4792.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;