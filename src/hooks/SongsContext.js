import { createContext, useEffect, useState } from "react";

import data  from "database/store";

export const SongsContext = createContext();

export const SongsProvider = (props) => {
    
    const [songs, setSongs] = useState( () => {
        // const prevState = localStorage.getItem("songs");
        // console.log(prevState);
        const newState = data();
        return newState;
    });
    
    useEffect( () => {
        localStorage.clear();
        localStorage.setItem("songs", JSON.stringify(songs));
    }, [songs]);

    return(
        <SongsContext.Provider value={{ songs, setSongs }} >
            {props.children}
        </SongsContext.Provider>
    );
}