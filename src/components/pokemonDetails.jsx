import { getPokemonDetails } from "./server/getPokemonList"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { AbilityDescription } from "./getAbilityDescription";
import { ThemeContext } from "./contexts/theme-context";
import { Section, Img, DivCard, DivMain, Abilities, P, Moves, DivMoves, H3  } from "../styles/pokemonDetails";
import { Types, Type } from "../styles/pokemonsStyle"

export const PokemonDetails =  (props) => {
   const { theme} = useContext(ThemeContext)
   let {  name } = useParams()
   const [pokemon, setPokemon] = useState();

   function upperCaseFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1)
}
    
    useEffect(() => {
        const fetchData = async () => {
            try {
            const details = await getPokemonDetails(name)
            setPokemon(details)
            console.log(pokemon)
            }catch(error){
                console.log("error", error);
            }
        }
        fetchData();
    }, [name])

    if (!pokemon) {
        return <div>Loading...</div>;
      }

      console.log("after if", pokemon)

   return(
        <>
           <Section {...props} 
            style={{color: theme.color, backgroundColor: theme.background}}>
               <div>
                <DivMain>
                <DivCard color={pokemon.types[0].type.name}>
                   <P> <span> # {pokemon.id}</span> {upperCaseFirstLetter(pokemon.name)}</P>
                   <p><Img src={pokemon.sprites.other.home.front_default} /></p>
                   <Types>{pokemon.types.map((types, index) => {
                       return (
                           <Type key={index} color={String(types.type.name)}>{upperCaseFirstLetter(types.type.name)} </Type>
                       )
                   })}
                   </Types>
                   </DivCard>
                   
                   <Abilities>
                   <H3>Abitilies</H3>
                    {pokemon.abilities.map((abilities, index) => (
                       <AbilityDescription key={index} ability={abilities.ability.name} />
                   ))}</Abilities>
                   </DivMain>
                   <DivMoves>
                    <H3>Moves</H3>
                    <Moves>
                    {pokemon.moves.map((moves, index) => {
                       return (
                           <li key={index}>{upperCaseFirstLetter(moves.move.name)} </li>
                       )
                   })}
                   </Moves>
                   </DivMoves>
               </div>
           </Section>
        </>
   )
}

