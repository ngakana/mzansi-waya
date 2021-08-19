import { createContext, useContext, useState, useEffect } from "react";

import { SongsContext } from "./SongsContext";

export const PlayingSongContext = createContext();

export const PlayingSongProvider = (props) => {

    const { songs, setSongs } = useContext(SongsContext);
    
    const [playingSong, setPlayingSong] = useState( () => {
        const prevState = localStorage.getItem("lastplayed");
        return prevState !== null ? 
            prevState 
            :
            {
                "song": songs[0],
                "len": 0,
                "playedLen": 0,
                "playedLenPercentage": 0,
                "playing": false,
            }
    });

    useEffect( () => {
        localStorage.removeItem("lastplayed");
        localStorage.setItem("lastplayed", JSON.stringify(playingSong));
    }, [playingSong]);

    const changePlayingSong = (desiredSong) => {

        const updatedSongs = songs.map( song => {
            if ( song.id === desiredSong.id ) {
                const track = {...song, active: true}
                setPlayingSong( state => {
                    return {...state, song:track}
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
            {props.children}
        </PlayingSongContext.Provider>
    );
}