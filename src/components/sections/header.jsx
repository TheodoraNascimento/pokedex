import {Header, Div, Img, ImgLogo, Input, Select, Button} from "../../styles/headerStyle";
import logo from "../../img/pokemon-logo-transparent.png";
import pokeball from "../../img/favicon_io/apple-touch-icon.png";
import { ThemeButton } from "../themeButton/themeButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Link, useNavigate } from "react-router-dom";


export const Nav = (props) => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate();
    const [type] = useState()
    const [input, setInput] = useState({
      pokemon: ''
    })

    const handleChangeType = (event) => {
     
      navigate(`/pokedex/${event.target.value}`)
  
    }

    const handleInputChange = (event) => {
      
      const lowerCaseName =  event.target.value.toLowerCase()
      setInput({
        pokemon: lowerCaseName
       
      })
   

      console.log("lowerCaseName1", input.pokemon);
    
    }


    const onClickHandle = (event) => {
      setInput({
        pokemon: event.target.value
       
      })
      navigate(`/pokedex/search/${input.pokemon}`)
    }

    const handleEnterDown = (event) => {
      if(event.key === "Enter"){
        console.log("lowerCaseName3", input.pokemon);
        setInput({
          pokemon: event.target.value
         
        })
        navigate(`/pokedex/search/${input.pokemon}`)

    }
  }

    console.log("beforeSelection", type);

    return(
        <>
          <Header id="header">

            <Div>
            <Link to={`/pokedex`}> <ImgLogo src={logo} alt="" /></Link>
            </Div>

          <Div>
            
            <Img src={pokeball}></Img>
            <Input type="text" placeholder="Search Pokemon by name" id="pokemon" value={input.pokemon} 
            onChange={handleInputChange}
            onKeyDown={handleEnterDown} />
            <Button onClick={onClickHandle} {...props}
            style={{ color: theme.color, background: theme.background }}>Search</Button>
            
          
          </Div>
           <Div>
           
            <form >
            <Select value={type} onChange={handleChangeType}>
            
              <option value="">Search by type</option>
              <option value="grass">Grass</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="electric">Electric</option>
              <option value="bug">Bug</option>
              <option value="flying">Flying</option>
              <option value="normal">Normal</option>
              <option value="dark">Dark</option>
              <option value="ghost">Ghost</option>
              <option value="fairy">Fairy</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="rock">Rock</option>
              <option value="ground">Ground</option>
              <option value="steel">Steel</option>
              <option value="poison">Poison</option>
              <option value="psychic">Psychic</option>
              <option value="fighting">Fighting</option>
              
            </Select >
            </form>
                       
            </Div>
         
            {console.log(type)}
            <ThemeButton/>
          </Header>
          
        </>
    )

    
}



