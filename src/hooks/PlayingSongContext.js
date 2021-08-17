import { createContext, useContext, useState, useEffect } from "react";

import { SongsContext } from "./SongsContext";

export const PlayingSongContext = createContext();

export const PlayingSongProvider = () => {

    const { songs, setSongs } = useContext(SongsContext);
    
    const [playingSong, setPlayingSong] = useState( () => {
        const prevState = localStorage.getItem("lastplayed");
        return prevState !== null ? 
            prevState 
            :
            {
                song: songs[0],
                len: 0,
                playedLen: 0,
                playedLenPercentage: 0,
                playing: false,
            }
    });

    useEffect( () => {
        localStorage.setItem("lastplayed", JSON.stringify(playingSong));
    }, [playingSong.song, playingSong.playing]);

    const changePlayingSong = (desiredSong) => {

        const updatedSongs = songs.map( song => {
            if ( song.id === desiredSong.id ) {
                const song = {...song, active: true}
                setPlayingSong( state => {
                    return {...state, song:song}
                });
                
                return song;
            } else {
                return {...song, active: false}
            }
        });

        setSongs( () => updatedSongs );
    }

    return(
        <PlayingSongContext.Provider value={{ playingSong, setPlayingSong, changePlayingSong }}>
            {checkPropTypes.children}
        </PlayingSongContext.Provider>
    );
}