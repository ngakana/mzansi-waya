import { useContext } from "react";

import { PlayingSongContext } from "hooks/PlayingSongContext";
import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";

import RangeInput from "./RangeInput";

function SongProgressBar() {

    const { playingSong } = useContext(PlayingSongContext);
    const { formatTimeInfo, seekHandler } = useContext(MediaPlayControlsContext);

    let startTime = formatTimeInfo(playingSong.playedLen);
    let endTime = formatTimeInfo(playingSong.len);

    return(
        <div className="song-progress-bar">
            <p>{startTime}</p>
            <RangeInput name="track" max={playingSong.len} step="10" progress={playingSong.playedLen} changeHandler={seekHandler}  />
            <p>{endTime}</p>
        </div>
    );
}
export default SongProgressBar;