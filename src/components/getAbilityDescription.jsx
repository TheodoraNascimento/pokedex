import { useEffect, useState } from "react";
import { getPokemonAbilities } from "./server/getPokemonList";
import { H4, P} from "../styles/abilities"

export const AbilityDescription = ({ability}) => {
    const [description, setDescription] = useState()

    useEffect(() => {
        const fetchData = async () =>{
        try{
               const getAbility = await getPokemonAbilities(ability)
               console.log("getAbilities", getAbility);
               const abilityDescription = [getAbility.effect]
               setDescription(abilityDescription)
               
         } catch(error){
           console.log("AbilityDescription error", error);
       }
    }
    fetchData();
}, [ability]);
return(
    <div>
        <H4>{ability}</H4>
        <P>{description}</P>
    </div>
)
}