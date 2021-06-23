import './VideoCallPage.scss'

import Chat from "./../UI/VideoCallUtilities/Chat/Chat";
import Footer from "./../UI/VideoCallUtilities/Footer/Footer";
import Details from "./../UI/VideoCallUtilities/Details/Details";
import Header from '../UI/VideoCallUtilities/Header/Header';

const VideoCallPage = () => {
    return (
        <div className="videocall-page">
            <video className="video-container" src="" controls></video>
            <Header />
            <Details />
            <Chat />
            <Footer />
        </div>
    )
}

export default VideoCallPage;