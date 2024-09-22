import "./App.css";
import Video from "./components/video/Video";
import React, { useState, useEffect } from "react";
import axios from "./components/axios";
interface itemType {
  url: string;
  channel: string;
  description: string;
  song: string;
  likes: number;
  shares: number;
  messages: number;
}
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/v2/posts");
      setVideos(res.data);
      return res;
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="app_videos">
        {videos?.map((item: itemType) => {
          return (
            <Video
              url={item?.url}
              channel={item?.channel}
              description={item?.description}
              song={item?.song}
              likes={item?.likes}
              shares={item?.shares}
              messages={item?.messages}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
