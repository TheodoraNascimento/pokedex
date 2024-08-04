import { SectionByName, CardByName, Li, Types, Type, Img, P, NotFound } from "../styles/pokemonsStyle";
import { useEffect, useState, useContext } from "react";
import { getPokemonDetails } from "./server/getPokemonList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./contexts/theme-context"

export const SearchByName = (props) => {
    const { theme } = useContext(ThemeContext)
    let { name } = useParams()
    const [found, setFound] = useState(false)
    const [pokemon, setPokemon] = useState({

    })
    console.log("searchByName", pokemon);

    function upperCaseFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await getPokemonDetails(name);
                setPokemon({
                    pokemonTypeOne: details.types[0].type.name,
                    name: details.name,
                    number: details.id,
                    sprite: details.sprites.other.home.front_default,
                    types: details.types.map(types => {
                        return (
                            [types.type.name]
                        )
                    }),
                    firstType: details.types[0].type.name,
                })
                setFound(true)
            } catch (error) {
                console.log("searchByName", error);
                setFound(false);
            }
        }
        fetchData()
    }, [name])

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    if (!found) {
        return (
            <NotFound {...props}
                style={{ color: theme.color, background: theme.background }}>Pokemon not found</NotFound>
        )
    }

    if (pokemon.name) {
        return (
            <SectionByName {...props}
                style={{ color: theme.color, background: theme.background }}>
                <CardByName >
                        <Li color={pokemon.firstType} >
                            <Link to={`/pokedex/pokemon/${pokemon.name}`}>
                                <P><span> # {pokemon.number} </span>{upperCaseFirstLetter(pokemon.name)}</P>
                                <p><Img src={pokemon.sprite} /></p>
                                <Types>{pokemon.types.map((types, index) => {
                                    return (
                                        <Type key={index} color={String(types[index])}>
                                            {upperCaseFirstLetter(String(types[index]))}
                                        </Type>
                                    )
                                }

                                )
                                }</Types>
                            </Link>
                        </Li>
                </CardByName>

            </SectionByName>
        )
    }
}
