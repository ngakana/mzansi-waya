
function RangeInput({name, max, progress, changeHandler}) {

    return(
        <div className={name}>
            <input
                type="range"
                name={name}
                min="0"
                max={max || 0}
                value={progress}
                onChange={changeHandler}
            />
        </div>
    );
}

export default RangeInput;