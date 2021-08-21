import { useState } from "react";

import { ReactComponent as MuteVol } from "assets/icons/volume-slash.svg";
import { ReactComponent as ZeroVol } from "assets/icons/volume-xmark.svg";
import { ReactComponent as LowVol } from "assets/icons/volume-low.svg";
import { ReactComponent as HighVol } from "assets/icons/volume-high.svg";
import { ReactComponent as MaxVol } from "assets/icons/volume.svg";

import RangeInput from "./RangeInput";

function VolumeControl() {

    const [vol, setVol] = useState(1);
    const [ismute, setIsmute] = useState(false);

    const handleSeek = (event) => {
        setVol(event.target.value);
    }

    const toggleVol = () => {
        setIsmute(!ismute);
    }

    return(
        <div className="volume">
            
            {
                ismute ?
                <MuteVol onClick={toggleVol} />
                :
                vol >= 0.75 ?
                <MaxVol onClick={toggleVol} />
                :
                vol >= 0.5 ?
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
                value={vol}
                onChange={handleSeek}
            />
        </div>
    );
}

export default VolumeControl;