import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";
type VideoProps = {
  likes: number;
  shares: number;
  messages: number;
  channel: string;
  description: string;
  song: string;
  url: string;
};
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}: VideoProps) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<any>(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        src={url}
        className="
      video__player"
        loop
        ref={videoRef}
        onClick={() => handleVideoPress()}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
