import { useContext } from "react";

import { ReactComponent as ShuffleButton } from "assets/icons/shuffle.svg";
import { ReactComponent as RepeatButton } from "assets/icons/repeat-alt.svg";
import { ReactComponent as RepeatOneButton } from "assets/icons/repeat-1-alt.svg";

import { PlaybackSettingsContext } from "hooks/PlaybackSettingsContext";

function PlaybackSettingsControls() {

    const { playbackSettings, toggleShuffle, toggleRepeat }= useContext(PlaybackSettingsContext);

    const shuffleHandler = () => {
        toggleShuffle();
    }

    const repeatHandler = () => {
        toggleRepeat();
    }

    return(
        <div className="playback-settings">
            {
                playbackSettings.shuffle ?
                <ShuffleButton className="shuffle-on" onClick={shuffleHandler} /> 
                :
                <ShuffleButton className="shuffle-off" onClick={shuffleHandler} />
            }
            {
                playbackSettings.repeat === "off" ?
                <RepeatButton className="repeat-off" onClick={repeatHandler} />
                :
                playbackSettings.repeat === "on" ?
                <RepeatButton className="repeat-on" onClick={repeatHandler} />
                :
                <RepeatOneButton className="repeat-one" onClick={repeatHandler} />
            }
        </div>
    );
}
export default PlaybackSettingsControls;