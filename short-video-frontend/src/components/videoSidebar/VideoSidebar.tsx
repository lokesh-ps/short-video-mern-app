import ShareIcon from "@material-ui/icons/Share";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import "./VideoSidebar.css";
type SidebarProps = {
  likes: number;
  shares: number;
  messages: number;
};
const VideoSidebar = ({ likes, shares, messages }: SidebarProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
