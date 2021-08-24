import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import SongCard from "./SongCard";

import { SongsContext } from "hooks/SongsContext";
import { PlayingSongContext } from "hooks/PlayingSongContext";
import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";

function SongsLibrary() {

    const { songs } = useContext(SongsContext);
    const { audioRef } = useContext(MediaPlayControlsContext);
    const { changePlayingSong, setPlayingSong } = useContext(PlayingSongContext);

    const handleChangeSong = async (event) => {
        let wasPlaying = true;
        if ( audioRef.current.paused ) {
            wasPlaying = false;
        }
        await changePlayingSong(event.currentTarget.id);

        if (wasPlaying) {
            setTimeout(() => {
                audioRef.current.play();
            }, 0.1);
            setPlayingSong( state => {
                return {...state, playing: true}
            });
        }
    }

    return(
        <ul className="songs-library">
            {
                songs.map( song => {
                    return (
                    <li 
                        key={uuidv4()} id={song.id} 
                        className={ song.active ? "selected-song" : "not active" }
                        onClick={handleChangeSong} 
                    >
                        <SongCard 
                            artwork={song.artwork}
                            title={song.title}
                            artist={song.artist}
                            featured={song.featured}
                            scrollThres={50}
                        />
                    </li>
                    )
                })
            }
        </ul>
    );
}

export default SongsLibrary;