
function InfiniteTextScroll({items}) {

    let text = "";
    items.forEach(concatToString);

    function concatToString(item){
        text += item;
    }
    
    return(
        <div className="scroll-wrapper">
            {
                text.length >= 14 ?
                <div className="scroller">
                    <p className="scrolling-text-1" >{text}</p>
                    <p className="scrolling-text-2" >{text}</p>
                </div>
                :
                <p>{text}</p>
            }
        </div>
    );
}

export default InfiniteTextScroll;