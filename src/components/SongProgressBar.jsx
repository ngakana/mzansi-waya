import { useContext } from "react";

import { PlayingSongContext } from "hooks/PlayingSongContext";

import RangeInput from "./RangeInput";

function SongProgressBar() {

    const { playingSong, setPlayingSong, changePlayingSong } = useContext(PlayingSongContext);

    return(
        <div className="song-progress-bar">
            {/* <p>{playingSong.playedLen}</p> */}
            <p>0:00:00</p>
            <RangeInput name="track" max="100" />
            {/* <p>{playingSong.len}</p> */}
            <p>3:10:00</p>
        </div>
    );
}
export default SongProgressBar;