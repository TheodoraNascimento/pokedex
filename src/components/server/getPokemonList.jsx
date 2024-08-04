import axios from "axios"



async function getPokemonList(offSet) {
        try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=10`)
        const results = response.data.results
        console.log("PokemonList", results);
        return results
    }catch(error){
        console.log("getPokemonList error", error);
    }
   }


async function getPokemonDetails(pokemon) {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const pokemonDetails = response.data
        console.log("PokemonDetails", pokemonDetails);
        return pokemonDetails
    }catch(error){
        console.log("getPokemonDetailserror", error);
    }
        
    }

async function getPokemonAbilities(abilityName){
    try{
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`)
    const ability = response.data.effect_entries.find((entry) => entry.language.name === "en")
    console.log("ability", ability)
    return ability
    }catch(error){
        console.log("getPokemonAbilities error", error);
    }
      
}

async function getPokemonByType(type){
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        console.log("getPokemonByType", response)
        const resultsType = response.data
        return resultsType
        }catch(error){
            console.log("getPokemonByType error", error);
        }

}


export {getPokemonDetails, getPokemonList, getPokemonAbilities, getPokemonByType}



