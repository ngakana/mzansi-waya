import { useContext } from "react";

import SongCard from "./SongCard";
import MediaPlayControls from "./MediaPlayControls";
import SongProgressBar from "./SongProgressBar";
import PlaybackSettingsControls from "./PlaybackSettingsControls";
import VolumeControl from "./VolumeControl";

import { PlayingSongContext } from "hooks/PlayingSongContext";

function Playerbar() {

    const { playingSong } = useContext(PlayingSongContext);

    return(
        <div className="playerbar">
            <SongCard 
                artwork={playingSong.song.artwork } 
                title={playingSong.song.title}
                artist={playingSong.song.artist}
                featured={playingSong.song.featured}
            />
            <MediaPlayControls />
            <PlaybackSettingsControls />
            <SongProgressBar />
            <VolumeControl />
        </div>
    );
}

export default Playerbar;