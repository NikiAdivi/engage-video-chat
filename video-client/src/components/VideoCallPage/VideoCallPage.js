import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

import "./VideoCallPage.scss";

import Chat from "./../Utilities/VideoCallUtilities/Chat/Chat";
import Footer from "./../Utilities/VideoCallUtilities/Footer/Footer";
import Details from "./../Utilities/VideoCallUtilities/Details/Details";
import Header from "../Utilities/VideoCallUtilities/Header/Header";
import MessageListReducer from "../../reducers/MessageListReducer";

import { getRequest, postRequest } from "./../../utils/apiRequests";
import { GET_CALL_ID, SAVE_CALL_ID } from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";

let myPeer = null;
let participants = [];

/*Connect to socket from client side*/
const socket = io.connect();

const VideoCallPage = () => {
  const history = useHistory();
  let { id } = useParams();

  let isAdmin = window.location.hash == "#init" ? true : false;
  let url = `${window.location.origin}${window.location.pathname}`;

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////      State Variables         ///////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const [detailsPopup, setDetailsPopup] = useState(false);
  const [isChatWindow, setChatWindow] = useState(false);
  const [isAudio, setAudio] = useState(true);
  const [isVideo, setVideo] = useState(true);

  const [stream, setStream] = useState();

  const [screenShareStream, setScreenShareStream] = useState();
  const [isPresenting, setPresenting] = useState(false);

  const [messageAlertPopup, setMessageAlert] = useState({});
  const [messageList, messageListReducer] = useReducer(MessageListReducer, []);

  useEffect(() => {
    if (isAdmin) {
      setDetailsPopup(true);
    }
    initialiseMyConnection();
    socket.on("user-connected", (data) => {
      myPeer.signal(data);
    });
  }, []);

  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////      Utility Functions           /////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * If the user is not admin:
   *  - GetRequest to the api endpoint with callID
   *  - Send signal data
   */
  const getCallandSignal = async () => {
    const response = await getRequest(`${GET_CALL_ID}/${id}`);
    if (response.code) {
      myPeer.signal(response.code);
    }
  };

  /**
   * Initialises the connection by:
   *  - Creating new Peer
   *  - Add Listeners for the myPeer
   */
  const initialiseMyConnection = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream_obj) => {
        setStream(stream_obj);
        
        let myVideo = document.getElementById("myvideo");
        console.log(myVideo)

        if ("srcObject" in myVideo) {
          myVideo.srcObject = stream_obj;
        } else {
          myVideo.src = window.URL.createObjectURL(stream_obj);
        }
        myVideo.play();

        myPeer = new Peer({
          initiator: isAdmin,
          trickle: false,
          stream: stream_obj,
        });

        participants.push(myPeer);

        if (!isAdmin) {
          getCallandSignal();
        }

        /* When myPeer obect has signa data to send*/
        myPeer.on("signal", async (data) => {
          if (isAdmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${SAVE_CALL_ID}`, payload);
          } else {
            socket.emit("join-room", data, participants, (cbData) => {
              console.log("code sent");
            });
          }
        });

        /** Wait for a connection to stream the video */
        myPeer.on("connect", () => {
          console.log("Peer Connected");
        });

        /*got remote video stream, now let's show it in a video tag*/
        myPeer.on("stream", (stream_obj) => {
          let video = document.getElementById("peervideo");

          if ("srcObject" in video) {
            video.srcObject = stream_obj;
          } else {
            video.src = window.URL.createObjectURL(stream_obj);
          }
          video.play();
        });

        myPeer.on("data", (message) => {
          messageListReducer({
            type: "addMessageToList",
            payload: {
              user: "Your Peer",
              msg_value: message.toString(),
              time: Date.now(),
            },
          });
        });
      })
      .catch(() => {});
  };

  /**
   * Send message to the connected peer
   * @param {*} message
   */
  const sendMessage = (message) => {
    myPeer.send(message);
    messageListReducer({
      type: "addMessageToList",
      payload: { user: "You", msg_value: message, time: Date.now() },
    });
  };

  /**
   * Start screenshare:
   * replaces the myvidestream with screensharevidestream
   */
  const startScreenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        myPeer.replaceTrack(
          stream.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          stream
        );
        setScreenShareStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          myPeer.replaceTrack(
            screenStream.getVideoTracks()[0],
            stream.getVideoTracks()[0],
            stream
          );
        };
        setPresenting(true);
      });
  };

  const stopScreenShare = () => {
    screenShareStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    myPeer.replaceTrack(
      screenShareStream.getVideoTracks()[0],
      stream.getVideoTracks()[0],
      stream
    );
    setPresenting(false);
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
    myPeer.destroy();
    history.push("/");
    window.location.reload();
  };

  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////           Return Script            ///////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="videocall-page">
      <video className="video-container" id = "peervideo" src="" controls></video>
      <video className="video-container-2" id = "myvideo" src="" controls></video>
      <Header setDetailsPopup={setDetailsPopup} />
      {detailsPopup && <Details setDetailsPopup={setDetailsPopup} url={url} />}
      {isChatWindow && (
        <Chat sendMessage={sendMessage} messageList={messageList} />
      )}
      <Footer
        isChatWindow={isChatWindow}
        setChatWindow={setChatWindow}
        isAudio={isAudio}
        toggleAudio={toggleAudio}
        isVideo={isVideo}
        toggleVideo={toggleVideo}
        disconnectCall={disconnectCall}
        startScreenShare={startScreenShare}
        stopScreenShare={stopScreenShare}
        isPresenting={isPresenting}
      />
    </div>
  );
};

export default VideoCallPage;
