import { v4 as uuidv4 } from "uuid";

function InfiniteTextScroll({items}) {
    
    return(
        <div className="wrapper">
            <ul className="scroller-wrapper">
                {
                    items.map( (item) => {
                        return <li className="scroller" key={uuidv4()} ><span>{item}</span></li>
                    })
                }
            </ul>
        </div>
    );
}

export default InfiniteTextScroll;