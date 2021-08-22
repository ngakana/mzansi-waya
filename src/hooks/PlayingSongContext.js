import { createContext, useContext, useState } from "react";

import { SongsContext } from "./SongsContext";

export const PlayingSongContext = createContext();

export const PlayingSongProvider = (props) => {

    const { songs, setSongs } = useContext(SongsContext);
    
    const [playingSong, setPlayingSong] = useState( () => {
        return {
                "song": songs[0],
                "len": 0,
                "playedLen": 0,
                "playedLenPercentage": 0,
                "playing": false,
            }
    });

    const changePlayingSong = (desiredSong) => {

        const updatedSongs = songs.map( song => {
            if ( song.id === desiredSong.id ) {
                const track = {...song, active: true}
                setPlayingSong({
                    "song": song,
                    "len": 0,
                    "playedLen": 0,
                    "playedLenPercentage": 0,
                    "playing": false,
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