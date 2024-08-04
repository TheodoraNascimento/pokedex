import React, { createContext, useState } from "react"
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'



export const themes = {
    light: {
        color: '#000',
        background: '#fff',
        themeIcon: faSun,
    },

    dark: {
        color: '#fff',
        background: '#181818',
        themeIcon: faMoon,
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}