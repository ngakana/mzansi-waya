
function RangeInput({name, max, step, progress, changeHandler, handleKeyPress}) {

    return(
        <div className={name}>
            <input
                type="range"
                name={name}
                min="0"
                max={max || 0}
                step={step}
                value={progress}
                onChange={changeHandler}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export default RangeInput;