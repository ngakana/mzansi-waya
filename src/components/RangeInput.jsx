
function RangeInput({name, max, step, progress, changeHandler}) {

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
            />
        </div>
    );
}

export default RangeInput;