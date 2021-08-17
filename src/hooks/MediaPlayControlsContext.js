import { createContext, useContext, useState, useRef } from "react";

import { PlayingSongContext } from "./PlayingSongContext";
import { SongsContext } from "./SongsContext";
import { PlaybackSettingsContext } from "./PlaybackSettingsContext";

export const MediaPlayControlsContext = createContext();

export const MediaPlayControls = (props) => {

    const { playingSong, setPlayingSong, changePlayingSong } = useContext(PlayingSongContext);
    const { songs, setSongs } = useContext(SongsContext);
    const { playbackSettings, toggleShuffle, toggleRepeat } = useContext(PlaybackSettingsContext);

    const audioRef = useRef(playingSong.playedLen);

    /****************** PLAY/PAUSE ******************/
    const playButtonHandler = () => {
        if ( playingSong.playing ) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlayingSong( state => {
            return {...state, playing: !state.playing}
        });
    }
    /*************************************************/

    /******************************************* SKIP *************************************************/
    const getRandomIndex = (max) => {
        let randomIndex = Math.ceil(Math.random() * max);
        if( randomIndex !== playingSongIndex ){
            return randomIndex
        }
        else{
            getRandomIndex()
        }
    }

    const getValidNextIndex = (dir, curIndex, max) => {
        let nextIndex;

        switch (dir) {
            case "next":
                if ( playbackSettings.shuffle ) {
                    nextIndex = getRandomIndex(max);
                } else {
                    nextIndex = curIndex >= len - 1 ? 0 : currentIndex + 1;
                }
                break;
            case "prev":
                if ( playbackSettings.shuffle ) {
                    nextIndex = getRandomIndex(max);
                } else {
                    nextIndex = currentIndex <= 0 ? len - 1 : currentIndex - 1;
                }
                break;        
            default:
                if (playbackSettings.repeat === "off") {
                    nextIndex = null;
                } else if ( playbackSettings.repeat === "on" ) {
                    nextIndex = currentIndex <= 0 ? len - 1 : currentIndex - 1;
                } else if ( playbackSettings.repeat === "one" ) {
                    nextIndex = curIndex;
                }
                break;
        }

        return nextIndex;
    }

    const skipButtonHandler = (skipdir) => {
        let len = songs.length;
        let currentIndex = songs.findIndex( song => song.id === playingSong.song.id );
        let wasPlaying = playingSong.playing;

        /* SKIP FORWARD */
        if ( skipdir === "next" ) {
            let nextIndex = getValidNextIndex(dir="next", curIndex=currentIndex, max=(len - 1));
            changePlayingSong(songs[nextIndex]);
        }
        /* SKIP BACKWARDS */
        else if ( skipdir === "prev" ) {
            let nextIndex = getValidNextIndex(dir="prev", curIndex=currentIndex, max=(len - 1));
            changePlayingSong(songs[nextIndex]);
        }

        if ( wasPlaying ) { audioRef.current.play() }

    }
    /**************************************************************************************************/

    /*********************** SEEK **********************/
    const seekHandler = (event) => {
        let seekedTime = event.target.value;

        audioRef.current.currentTime = seekedTime;
        setPlayingSong( state => {
            return {...state, playedLen: seekedTime}
        });
    }
    /***************************************************/

    /********************************* END OF SONG ********************************/
    const songEndHandler = () => {
        let len = songs.length;
        let currentIndex = songs.findIndex( song => song.id === playingSong.song.id );
        let nextIndex = getValidNextIndex(dir="", curIndex=currentIndex, max=len-1);

        if ( nextIndex === null ) {
            changePlayingSong(songs[currentIndex]);
        } else {
            changePlayingSong(songs[nextIndex]);
            audioRef.current.play()
        }
    }
    /**********************************************************************************/

    return(
        <MediaPlayControlsContext.Provider value={{ playButtonHandler, skipButtonHandler, seekHandler, songEndHandler }} >
            {props.children}
        </MediaPlayControlsContext.Provider>
    );
}