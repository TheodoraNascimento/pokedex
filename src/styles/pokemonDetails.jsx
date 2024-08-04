import { styled } from "styled-components"
import { colors } from "./pokemonsStyle"

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px 10px 10px 10px;
`

export const DivCard = styled.div`
max-width: 300px;
max-height: 400px;
padding: 30px;
margin: 30px 0 0 30px;
text-align: center;
border: 1px solid transparent;
border-radius: 50px;
box-shadow: 2px 2px 8px grey, -2px -2px 8px grey;
background-color: lightBlue;
${colors}
`

export const P = styled.p`
font-weight: 600;
font-size: 18px;
  
`
export const DivMain = styled.div`
display: flex;

     @media(max-width:425px){
      flex-direction: column;
      align-items: center;
    }

`

export const Abilities = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 100px;
max-width: 100%;
text-transform: capitalize;
gap: 30px;

     @media(max-width:425px){
      padding: 20px 0 0 10px;
      font-size: 12px;
    }
`

export const AbilityDescription = styled.p`
display: flex;
text-transform: capitalize;
max-width: 100%;
flex-wrap: wrap;
`

export const Img = styled.img`
height: 200px;
margin-bottom: 10px;
`

export const DivMoves = styled.div`
text-align: center;
padding: 70px;
`

export const Moves = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 800px;
  gap: 20px;
  padding-top: 50px;

       @media(max-width:425px){
         max-height: 100%;
    }
`

export const H3 = styled.h3`
 font-size: 35px;
 text-align: center;
`