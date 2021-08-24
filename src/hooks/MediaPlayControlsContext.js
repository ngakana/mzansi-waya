import { createContext, useContext, useRef } from "react";

import { PlayingSongContext } from "./PlayingSongContext";
import { SongsContext } from "./SongsContext";
import { PlaybackSettingsContext } from "./PlaybackSettingsContext";

export const MediaPlayControlsContext = createContext();

export const MediaPlayControlsProvider = (props) => {

    const { playingSong, setPlayingSong, changePlayingSong } = useContext(PlayingSongContext);
    const { songs } = useContext(SongsContext);
    const { playbackSettings } = useContext(PlaybackSettingsContext);

    const audioRef = useRef(null);

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
    const getRandomIndex = (max, curIndex) => {
        let randomIndex = Math.ceil(Math.random() * max);
        if( randomIndex !== curIndex ){
            return randomIndex
        }
        else{
            getRandomIndex(max, curIndex);
        }
    }

    const getValidNextIndex = (dir, curIndex, max) => {
        let nextIndex;

        switch (dir) {
            case "next":
                if ( playbackSettings.shuffle ) {
                    nextIndex = getRandomIndex(max, curIndex);
                } else {
                    nextIndex = curIndex >= max - 1 ? 0 : curIndex + 1;
                }
                break;
            case "prev":
                if ( playbackSettings.shuffle ) {
                    nextIndex = getRandomIndex(max);
                } else {
                    nextIndex = curIndex <= 0 ? max - 1 : curIndex - 1;
                }
                break;        
            default:
                if (playbackSettings.repeat === "off") {
                    nextIndex = null;
                } else if ( playbackSettings.repeat === "on" ) { 
                    nextIndex = curIndex >= max - 1 ? 0 : curIndex + 1;
                } else if ( playbackSettings.repeat === "one" ) {
                    nextIndex = curIndex;
                }
                break;
        }

        return nextIndex;
    }

    const skipButtonHandler = async (skipdir) => {
        let len = songs.length;
        let currentIndex = songs.findIndex( song => song.id === playingSong.song.id );
        let wasPlaying = !audioRef.current.paused;
        audioRef.current.pause();

        /* SKIP FORWARD */
        if ( skipdir === "next" ) {
            let nextIndex = getValidNextIndex("next", currentIndex, (len - 1));
            await changePlayingSong(songs[nextIndex]);
        }
        /* SKIP BACKWARDS */
        else if ( skipdir === "prev" ) {
            let nextIndex = getValidNextIndex("prev", currentIndex, (len - 1));
            await changePlayingSong(songs[nextIndex]);
        }
        if ( wasPlaying ) { 
            audioRef.current.pause();
            setTimeout(() => {
                audioRef.current.play();
            }, 0.1);
            setPlayingSong( state => {
                return {...state, playing: true}
            });
        }

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
        let nextIndex = getValidNextIndex("", currentIndex, (len - 1));

        if ( nextIndex === null ) {
            changePlayingSong(songs[currentIndex]);
        } else {
            changePlayingSong(songs[nextIndex]);
            setTimeout(() => {
                audioRef.current.play();
            }, 0.1);
            setPlayingSong( state => {
                return {...state, playedLen: 0, playing: true}
            });
        }
    }
    /**********************************************************************************/

    /********************************* DURING PLAY ********************************/
    
    const formatTimeInfo = (time) => {
        if (time < 3600){
          return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
        }
        else {
          return Math.floor(time / 3600) + ":" + ("0" + Math.floor(time%3600 /60)).slice(-2) + ":" + ("0" + Math.floor(time%(3600*60)%60)).slice(-2);
        }
    }

    const songTimeUpdatehandler = (event) => {

        const duration = event.target.duration;
        const currentLength = event.target.currentTime;
        const currentProgress = (Math.round(duration)/Math.round(currentLength))*100;

        setPlayingSong( (playingSong) => ({
            ...playingSong, 
            len: duration,
            playedLen: currentLength,
            playedLenPercentage: currentProgress
        }))
    }
    /**********************************************************************************/

    return(
        <MediaPlayControlsContext.Provider value={{ audioRef, playButtonHandler, skipButtonHandler, seekHandler, songEndHandler, formatTimeInfo, songTimeUpdatehandler }} >
            {props.children}
        </MediaPlayControlsContext.Provider>
    );
}