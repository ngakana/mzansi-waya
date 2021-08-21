
function RangeInput({name, max}) {

    return(
        <div className={name}>
            <input
                type="range"
                name={name}
                min="0"
                max={max || 0}
            />
        </div>
    );
}

export default RangeInput;