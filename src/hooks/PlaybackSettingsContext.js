import { createContext, useState } from "react";

export const PlaybackSettingsContext = createContext();

export const PlaybackSettingsProvider = ({props}) => {
    
    const [playbackSettings, setPlaybackSettings] = useState({
        shuffle: false,
        repeat: "off"
    });

    const toggleShuffle = () => {
        setPlaybackSettings( (state) => {
            return {...state, shuffle: !state.shuffle } 
        });
    }

    const toggleRepeat = () => {
        setPlaybackSettings( (state) => {
            if (state.repeat === "off") {
                return {...state, repeat: "on"}
            } else if ( state.repeat === "on" ) {
                return {...state, repeat: "repeat-one"}
            } else if ( state.repeat === "repeat-one" ) {
                return {...state, repeat: "off"}
            }
        });
    }

    return(
        <PlaybackSettingsContext.Provider value={{ playbackSettings, toggleShuffle, toggleRepeat }} >
            {props.children}
        </PlaybackSettingsContext.Provider>
    );
}