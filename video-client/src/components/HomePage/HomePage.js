
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import './HomePage.scss'
import HeaderHomePage from "../UI/HeaderHomePage/HeaderHomePage";
import { useState } from "react";

const shortid = require("shortid");

const HomePage = () => {

    const history = useHistory()

    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Functions              /////////////////////////
    ////////////////////////////////////////////////////////////////////////////////


    /* This function starts the call:
         -Generates unique ID
         -Redirect to call page */

    const startCall = () => {
        const unique_id = shortid.generate();
        history.push(`/${unique_id}#init`);
    }

    const [url, setURL] = useState('');

    const joinCall = () => {
        //Get the id. Rest all will already be part of history
        let pathname = url.split("/").slice(-1);
        history.push(`${pathname}`);
    }
    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Return Script            ///////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="home-page">
            <HeaderHomePage />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <img src="https://img.freepik.com/free-vector/video-conferencing-concept-landing-page_52683-20651.jpg?size=626&ext=jpg"></img>
                    </div>
                </div>
                <div className="middle-side">
                    <div className="content">
                        <h2>Be Agile!</h2>
                        <h2>Now shift to video calls</h2>
                        <p>
                            Engage with each other using our video call app built using Agile methodology.
                        </p>
                        <div className="action-btn">
                            <button className="btn purple" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                Start a New Meeting
                            </button>
                        </div>
                        <div className="action-btn">
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Enter link" onChange={e => setURL(e.target.value)} />
                                </div>
                                <button className="btn purple" onClick={joinCall}>Join Meeting</button>
                            </div>
                        </div>
                    </div>
                    <div className="help-text">
                        {/* <a href="">Learn more</a> about Agile framework. */}
                    </div>
                </div>
                {/* <div className="right-side">
                    <div className="content">
                        <img src="https://image.freepik.com/free-vector/group-video-concept-illustration_114360-4792.jpg" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};
export default HomePage;