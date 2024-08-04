import { Section, Card, Ul, Li, Types, Type, Button, Img, P} from "../styles/pokemonsStyle"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./contexts/theme-context";
import { Link } from "react-router-dom";
import { getPokemonByType, getPokemonDetails } from "./server/getPokemonList";

export default function TypeSelected(props) {
  const { theme } = useContext(ThemeContext)
  const [offSet, setOffSet] = useState(10)
  let { type } = useParams()
  const [pokemonByType, setPokemonByType] = useState({
    pokemonListByType: [],
    pokemonDetails: []
  })

  function upperCaseFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchType = await getPokemonByType(type)
        const searchTypeNames = await searchType.pokemon.map((pokemon) => {
          return (
            pokemon.pokemon.name
          )
        })
        const pokemonDetailsByType = await Promise.all(searchTypeNames.map(async (name) => {
          const details = await getPokemonDetails(name)
          return ({
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

        console.log("searchType", searchTypeNames);

        setPokemonByType({
          pokemonListByType: searchTypeNames,
          pokemonDetails: pokemonDetailsByType

        })
      } catch (error) {
        console.log("setType error", error);
      }
    }
    fetchData()
  }, [type])


  if (!pokemonByType.pokemonDetails) {
    return <div>Loading...</div>;
  }
  return (
    <Section {...props}
      style={{ color: theme.color, backgroundColor: theme.background }}>
      <Card >

        <Ul >
          {pokemonByType.pokemonDetails.map((pokemon, index) => {
            if (index <= offSet) {
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
            }
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



