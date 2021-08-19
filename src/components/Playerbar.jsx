import { useState, useContext } from "react";

import { ReactComponent as MaximizeButton } from "assets/icons/arrows-maximize.svg";
import { ReactComponent as MinimizeButton } from "assets/icons/arrows-minimize.svg";

import SongCard from "./SongCard";
import MediaPlayControls from "./MediaPlayControls";
import RangeInput from "./RangeInput";

import { PlayingSongContext } from "hooks/PlayingSongContext";

function Playerbar() {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const { playingSong } = useContext(PlayingSongContext);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    }

    return(
        <div className="playerbar">
            <div className="fullscreen-button">
                {
                    isFullscreen ? 
                    <MinimizeButton onClick={ toggleFullscreen } />
                    :
                    <MaximizeButton onClick={ toggleFullscreen } />
                }
            </div>
            <SongCard 
                artwork={playingSong.song.artwork } 
                title={playingSong.song.title}
                artist={playingSong.song.artist}
                featured={playingSong.song.featured}
            />
            <MediaPlayControls />
            <RangeInput 
                name="track" 
                max={playingSong.song.len}
                value={playingSong.song.len}
            />
        </div>
    );
}

export default Playerbar;