import { useRef, useContext } from "react";

import { ReactComponent as SkipBackButton } from "assets/icons/backward-step.svg";
import { ReactComponent as SkipForwardButton } from "assets/icons/forward-step.svg";
import { ReactComponent as PlayButton } from "assets/icons/play.svg";
import { ReactComponent as PauseButton } from "assets/icons/pause.svg";

import { PlayingSongContext } from "hooks/PlayingSongContext";
import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";

function MediaPlayControls({songIsPlaying}) {

    const audioRef = useRef(null);

    const { playingSong, setPlayingSong, changePlayingSong } = useContext(PlayingSongContext);
    const { playButtonHandler, skipButtonHandler, seekHandler, songEndHandler } = useContext(MediaPlayControlsContext);

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
            <audio
                // onTimeUpdate={songTimeUpdatehandler} 
                // onLoadedMetadata={songTimeUpdatehandler}
                ref={audioRef}
                src={playingSong.song.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default MediaPlayControls;