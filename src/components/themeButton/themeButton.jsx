import React, { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export const ThemeButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
             <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
             <SunMoon icon={theme.themeIcon} style={{ color: theme.color }} /></Button> 
            
        </div>
    )
}

const Button = styled.button`
 background-color: transparent;
 border: none;
 padding: 30px;

 @media(max-width:425px){
 padding-left: 10px;
}

`

const SunMoon = styled(FontAwesomeIcon)`
  font-size: 4vw;
  transition: all 0.3s ease-in-out;
  &:hover {
  transform: scale(1.1);
  cursor: pointer;
  }`;