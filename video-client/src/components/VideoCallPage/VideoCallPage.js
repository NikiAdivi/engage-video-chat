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

let peer = [];
const socket = io.connect("http://localhost:4000");

const VideoCallPage = () => {

    const history = useHistory();
    let { id } = useParams();

    let isAdmin = window.location.hash == "#init" ? true : false;
    let url = `${window.location.origin}${window.location.pathname}`;

    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Utilities              /////////////////////////
    ////////////////////////////////////////////////////////////////////////////////    

    const [detailsPopup, setDetailsPopup] = useState(false);
    const [isChatWindow, setChatWindow] = useState(false);
    const [isAudio, setAudio] = useState(true);
    const [isVideo, setVideo] = useState(true);

    const [stream, setStream] = useState();
    const [screenStream, shareScreen] = useState();
    const [isPresenting, setPresenting] = useState(false);

    useEffect(() => {
        if (isAdmin) {
            setDetailsPopup(true);
        }
        initialiseWebRTC();
        socket.on("code", (data) => {
            peer.signal(data);
        });
    }, [])

    const getRecieverCode = async () => {
        const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
        if (response.code) {
            peer.signal(response.code);
        }
    };

    const initialiseWebRTC = () => {
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: true,
            })
            .then((stream_obj) => {
                setStream(stream_obj);

                peer = new Peer({
                    initiator: isAdmin,
                    trickle: false,
                    stream: stream_obj,
                });

                if (!isAdmin) {
                    getRecieverCode();
                }

                peer.on("signal", async (data) => {
                    if (isAdmin) {
                        let payload = {
                            id,
                            signalData: data,
                        };
                        await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
                    }
                    else {
                        socket.emit("code", data, (cbData) => {
                            console.log("code sent");
                        });
                    }
                });

                peer.on("connect", () => {
                    console.log("Peer Connected");
                    // wait for 'connect' event before using the data channel
                });

                peer.on("stream", (stream_obj) => {
                    // got remote video stream, now let's show it in a video tag
                    let video = document.querySelector("video");

                    if ("srcObject" in video) {
                        video.srcObject = stream_obj;
                    } else {
                        video.src = window.URL.createObjectURL(stream_obj); // for older browsers
                    }
                    video.play();
                });

            })
            .catch(() => { });
    };

    const toggleAudio = (value) => {
        stream.getAudioTracks()[0].enabled = value;
        setAudio(value);
    };
    
    const toggleVideo = (value) => {
        stream.getVideoTracks()[0].enabled = value;
        setVideo(value);
    };
    
    const disconnectCall = () => {
        peer.destroy();
        history.push("/");
        window.location.reload();
    };
    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////           Return Script            ///////////////////////
    ////////////////////////////////////////////////////////////////////////////////    

    return (
        <div className="videocall-page">
            <video className="video-container" src="" controls></video>
            {/* <video className="video-container-2" src="" controls></video> */}
            <Header setDetailsPopup={setDetailsPopup} />
            {detailsPopup && <Details setDetailsPopup={setDetailsPopup} url={url} />}
            {isChatWindow && <Chat />}
            <Footer isChatWindow={isChatWindow} setChatWindow={setChatWindow} isAudio = {isAudio} toggleAudio = {toggleAudio} 
            isVideo = {isVideo} toggleVideo = {toggleVideo} disconnectCall={disconnectCall} />
        </div>
    )
}

export default VideoCallPage;