import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
type FooterProps = {
  channel: string;
  description: string;
  song: string;
};
const VideoFooter = ({ channel, description, song }: FooterProps) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
    </div>
  );
};

export default VideoFooter;
