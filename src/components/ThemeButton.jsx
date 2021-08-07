import { useContext }  from "react";

import { ThemeContext } from "../hooks/ThemeContext";

function ThemeButton() {

    const { themeIsLight, toggleTheme } = useContext(ThemeContext);

    return(
        <div className="theme">
            <div className={`theme-layer ${themeIsLight ? "light" : null}`}></div>
            <div className={`theme-btn ${themeIsLight ? "light" : "dark"}-theme-btn `} onClick={ toggleTheme } ></div>
        </div>
    );
}

export default ThemeButton;