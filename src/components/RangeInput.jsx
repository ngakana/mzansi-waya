
function RangeInput({icon, name, max, value, onChangeHandler}) {

    return(
        // <input type="range" name={name} id="" min="0" max={max} />
        <div className={name}>
            <img src={icon} alt={`${name} icon`}/>
            <input
                type="range"
                name={name}
                min="0"
                max={max || 0}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default RangeInput;