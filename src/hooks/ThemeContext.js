import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const [themeIsLight, setThemeMode] = useState(false);

    const toggleTheme = () => {
        setThemeMode( !themeIsLight );
        // console.log(themeIsLight);
    }

    return(
        <ThemeContext.Provider value={{ themeIsLight, toggleTheme }} >
            {props.children}
        </ThemeContext.Provider>
    );
}