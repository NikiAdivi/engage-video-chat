import './VideoCallPage.scss'

import Chat from "./../UI/VideoCallUtilities/Chat/Chat";
import Footer from "./../UI/VideoCallUtilities/Footer/Footer";
import Header from "./../UI/VideoCallUtilities/Header/Header";
import Details from "./../UI/VideoCallUtilities/Details/Details";

const VideoCallPage = () => {
    return (
        <div className = "videocall-page">
            <video className = "video-ontainer" src = "" controls></video>
            <Header />
            <Details />
            <Chat />
            <Footer />
        </div>
    )
}

export default VideoCallPage;