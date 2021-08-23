import { useState, useContext } from "react";

import { ReactComponent as MuteVol } from "assets/icons/volume-slash.svg";
import { ReactComponent as ZeroVol } from "assets/icons/volume-xmark.svg";
import { ReactComponent as LowVol } from "assets/icons/volume-low.svg";
import { ReactComponent as MaxVol } from "assets/icons/volume-high.svg";
import { ReactComponent as HighVol } from "assets/icons/volume.svg";

import { MediaPlayControlsContext } from "hooks/MediaPlayControlsContext";
import RangeInput from "./RangeInput";

function VolumeControl() {

    const { audioRef } = useContext(MediaPlayControlsContext);
    const [vol, setVol] = useState(100);
    const [ismute, setIsmute] = useState(false);

    const handleSeek = (event) => {
        setVol(event.target.value);
        audioRef.current.volume = parseFloat((event.target.value/100).toFixed(1));
    }

    const toggleVol = () => {
        setIsmute(!ismute);
        audioRef.current.muted = !audioRef.current.muted;
    }

    const handleKeyPress = (event) => {
        if ( event.key === "ArrowLeft" ) {
            let newVal = (event.target.value - 10)>=0 ? (event.target.value - 10) : 0;
            setVol(newVal);
            audioRef.current.volume = parseFloat((newVal/100).toFixed(1));
        }else if ( event.key === "ArrowRight" ) {
            let newVal = (event.target.valueAsNumber + 10)<=100 ? (event.target.valueAsNumber + 10) : 100;
            setVol(newVal);
            audioRef.current.volume = parseFloat((newVal/100).toFixed(1));
        }
    }

    return(
        <div className="volume">
            
            {
                ismute ?
                <MuteVol onClick={toggleVol} />
                :
                vol >= 70 ?
                <MaxVol onClick={toggleVol} />
                :
                vol >= 35 ?
                <HighVol onClick={toggleVol} />
                :
                vol === 0 ?
                <ZeroVol onClick={toggleVol} />
                :
                <LowVol onClick={toggleVol} />
            } 
            <RangeInput
                name="vol"
                min="0"
                max="100"
                step="5"
                progress={(audioRef.current && (audioRef.current.volume*100)) || vol}
                // progress={vol}
                changeHandler={handleSeek}
                handleKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default VolumeControl;