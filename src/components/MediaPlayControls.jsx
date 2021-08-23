import { useContext } from "react";

import { ReactComponent as SkipBackButton } from "assets/icons/backward-step.svg";
import { ReactComponent as SkipForwardButton } from "assets/icons/forward-step.svg";
import { ReactComponent as PlayButton } from "assets/icons/play-circle.svg";
import { ReactComponent as PauseButton } from "assets/icons/pause-circle.svg";

import { PlayingSongContext } from "hooks/PlayingSongContext";
import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";

function MediaPlayControls() {

    const { playingSong } = useContext(PlayingSongContext);
    const { audioRef, playButtonHandler, skipButtonHandler, songEndHandler, songTimeUpdatehandler } = useContext(MediaPlayControlsContext);

    const skipBack = () => {
        skipButtonHandler("prev")
    }

    const skipForward = () => {
        skipButtonHandler("next")
    }

    return(
        <div className="media-play-controls">
            <SkipBackButton 
                onClick={skipBack}
                tabIndex={0} 
            />
            {
                playingSong.playing ? 
                <PauseButton 
                    style={{ transform: "scale(2)" }} 
                    onClick={playButtonHandler}
                    tabIndex={0}
                />
                :
                <PlayButton 
                    style={{ transform: "scale(2)" }}
                    onClick={playButtonHandler} 
                    tabIndex={0}
                />
            }
            <SkipForwardButton 
                onClick={skipForward} 
                tabIndex={0}
            />
            <audio
                onTimeUpdate={songTimeUpdatehandler} 
                onLoadedMetadata={songTimeUpdatehandler}
                ref={audioRef}
                src={playingSong.song.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default MediaPlayControls;