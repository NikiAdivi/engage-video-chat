import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './VideoCallPage.scss'

import Chat from "./../UI/VideoCallUtilities/Chat/Chat";
import Footer from "./../UI/VideoCallUtilities/Footer/Footer";
import Details from "./../UI/VideoCallUtilities/Details/Details";
import Header from '../UI/VideoCallUtilities/Header/Header';

import { getRequest, postRequest } from "./../../utils/apiRequests";
import { BASE_URL, GET_CALL_ID, SAVE_CALL_ID, } from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";

const VideoCallPage = () => {

    const history = useHistory();
    let { id } = useParams();
    let isAdmin = window.location.hash == "#init" ? true : false;
    let url = `${window.location.origin}${window.location.pathname}`;

    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Utilities              /////////////////////////
    ////////////////////////////////////////////////////////////////////////////////    

    const [detailsPopup, setDetailsPopup] = useState(false);
    const [isAudio, setAudio] = useState(false);
    const [stream, setStream] = useState();
    const [isPresenting, setPresenting] = useState(false);

    useEffect(() => {
        if (isAdmin) {
            setDetailsPopup(true);
        }
        initialiseWebRTC();
    }, [])

    const initialiseWebRTC = () => {
        navigator.mediaDevices
        .getUserMedia({
            audio: true,
            video: true
        })
        .then()
    };

    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Return Script            ///////////////////////
    ////////////////////////////////////////////////////////////////////////////////    

    return (
        <div className="videocall-page">
            <video className="video-container" src="" controls></video>
            <Header setDetailsPopup={setDetailsPopup} />
            {detailsPopup && <Details setDetailsPopup={setDetailsPopup} url={url} />}
            <Chat />
            <Footer />
        </div>
    )
}

export default VideoCallPage;