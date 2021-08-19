
import { ReactComponent as SkipBackButton } from "assets/icons/backward-step.svg";
import { ReactComponent as SkipForwardButton } from "assets/icons/forward-step.svg";
import { ReactComponent as PlayButton } from "assets/icons/play.svg";
import { ReactComponent as PauseButton } from "assets/icons/pause.svg";

function MediaPlayControls({songIsPlaying}) {

    return(
        <div className="media-play-controls">
            <SkipBackButton />
            {
                songIsPlaying ? 
                <PauseButton style={{ transform: "scale(2)" }} />
                :
                <PlayButton style={{ transform: "scale(2)" }} />
            }
            <SkipForwardButton />
        </div>
    );
}

export default MediaPlayControls;