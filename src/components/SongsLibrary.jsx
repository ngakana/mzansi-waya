import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as PlayIcon } from "assets/icons/play-circle.svg";
import { ReactComponent as PauseIcon } from "assets/icons/pause-circle.svg";

import SongCard from "./SongCard";

import { SongsContext } from "hooks/SongsContext";
import { PlayingSongContext } from "hooks/PlayingSongContext";
import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";

function SongsLibrary() {

    const { songs } = useContext(SongsContext);
    const { audioRef, playButtonHandler } = useContext(MediaPlayControlsContext);
    const { playingSong, changePlayingSong, setPlayingSong } = useContext(PlayingSongContext);

    const handleChangeSong = async (event) => {
        let wasPlaying = false;
        if ( playingSong.playing  ) {
            wasPlaying = true;
        }

        await changePlayingSong(event.currentTarget.id);

        if (wasPlaying) {
            setTimeout(() => {
                audioRef.current.play();
            }, 0.1);
            setPlayingSong( state => {
                return {...state, playing: true}
            });
        } else {
            setTimeout(() => {
                audioRef.current.pause();
            }, 0.1);
            setPlayingSong( state => {
                return {...state, playing: false}
            });
        }
    }

    const playSongOnFocus = (event) => {
        let wasPlaying = false;
        if ( playingSong.playing  ) {
            wasPlaying = true;
        }

        if (wasPlaying) {
            audioRef.current.pause();
            setPlayingSong( state => {
                return {...state, playing: false}
            });
        } else {
            audioRef.current.play();
            setPlayingSong( state => {
                return {...state, playing: true}
            });
        }

        console.log(event);
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
                        {
                            song.id === playingSong.song.id && playingSong.playing ?
                            <PauseIcon onClick={playButtonHandler} />
                            :
                            <PlayIcon onClick={playButtonHandler} />
                        }
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