import { Section, Card, Ul, Li, Types, Type, Button, P, Img } from "../styles/pokemonsStyle"
import { useEffect, useState, useContext } from "react"
import { getPokemonDetails, getPokemonList } from "./server/getPokemonList";
import { ThemeContext } from "./contexts/theme-context"
import { Link} from "react-router-dom";


export const GetPokedex = (props) => {
    const { theme } = useContext(ThemeContext)
   
    const [offSet, setOffSet] = useState(0)
    const [pokedex, setPokedex] = useState({
        pokemonList: [],
        pokemonFirstType: ""
    })


    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemonsInfo = await getPokemonList(offSet)
                const pokemonPokedex = await Promise.all(pokemonsInfo.map(async (pokemonInfo) => {
                    const details = await getPokemonDetails(pokemonInfo.name);
                    return ({
                        pokemonTypeOne: details.types[0].type.name,
                        name: details.name,
                        number: details.id,
                        sprite: details.sprites.other.home.front_default,
                        types: details.types.map(types => {
                            return (
                                [types.type.name]
                            )
                        }),
                        firstType: details.types[0].type.name
                    })
                })
                )
                setPokedex(() => ({
                    pokemonList: [...pokedex.pokemonList, ...pokemonPokedex],

                }))

            } catch (error) {
                console.log("GetPokedex error", error);

            }

        }
        fetchData()
    }, [offSet])

    if (!pokedex) {
        return <div>Loading...</div>;
    }

    function upperCaseFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    return (
        <Section {...props}
            style={{ color: theme.color, background: theme.background }}>
            <Card >
                <Ul>
                    {pokedex.pokemonList.map((pokemon, index) => {
                        return (
                            <Li key={index} color={pokemon.firstType}>
                                <Link to={`/pokedex/pokemon/${pokemon.name}`}>
                                <P><span> # {pokemon.number} </span>{upperCaseFirstLetter(pokemon.name)}</P>
                                    <p><Img src={pokemon.sprite} /></p>
                                    <Types>{pokemon.types.map((types, index) => {
                                        return (
                                            <Type key={index} color={String(types)}>
                                                {upperCaseFirstLetter(String(types))}
                                            </Type>
                                        )
                                    }

                                    )
                                    }</Types>
                                </Link>
                            </Li>
                        )
                    })}

                </Ul>
            </Card>
            
            <Button onClick={() => setOffSet(offSet + 10)}
                style={{ color: theme.color, backgroundColor: theme.background }}>Load More</Button>
           <a href="#header"> <Button {...props}
            style={{ color: theme.color, background: theme.background }}>Back to top</Button></a>

        </Section>
    )
    }
