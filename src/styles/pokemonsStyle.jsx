import styled, { css } from "styled-components"

export const NotFound = styled.div`
 font-size: 4vw;
 padding-top: 60px;
 text-align: center;
 height: 100vh;
`
export const colors = css`
${(props) => {
   switch (props.color){
      case "grass":
         return css`
              background-color: #9BCC51;`
      case "fire":
         return css`
              background-color: #FE7E24; `
      case "water":
         return css`
              background-color: #4592C4; `
      case "electric":
         return css`
               background-color: #EDD535; `
      case "bug":
         return css`
               background-color: #729F3F; `
      case "normal":
         return css`
               background-color: #A4ACAF; `
      case "poison":
         return css`
               background-color: #BA7FC9; `
      case "rock":
            return css`
               background-color: #A38D21; `
      case "ground":
         return css`
               background-color: #AB9842; `
      case "fairy":
         return css`
               background-color: #FDB9E9; `
      case "flying":
         return css`
               background-color: #3DC7EF;`
      case "psychic":
         return css`
               background-color: #F366B9; `
      case "fighting":
         return css`
               background-color: #D56723; `
      case "steel":
         return css`
               background-color: #9EB7B8; `
      case "ghost":
         return css`
               background-color: #7B63A3; `
      case "ice":
         return css`
               background-color: #52C5E8; `
      case "dragon":
         return css`
               background-color: #53A4CF; `
      case "dark":
         return css`
               background-color: #707070; `
      case "water":
         return css`
               background-color: #4592C4; `                   
   }
   
  }} 
`
export const SectionByName = styled.section`
   width: 100vw;
   height: 100vh;
   font-size: 16px;
   padding: 30px 0 10px 0;
   @media(max-width:425px){
    font-size: 12px;
    }
`
export const CardByName = styled.div`
   display: flex;
   justify-content: center;
   @media(max-width:425px){
    font-size: 12px;
    }
`

export const Section = styled.section`
   width: 100vw;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 16px;
   padding: 30px 0 10px 0;

   @media(max-width:425px){
    font-size: 12px;
    }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
`

export const Ul = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   width: 100vw;
   gap: 20px;
   padding: 0 10px;
   margin: 0;
`

export const P = styled.p`
font-weight: 600;
padding: 10px 0 10px 0;
`

export const Img = styled.img`
 height: 130px;

    @media(max-width:425px){
    height: 100px;
    }
`

export const Button = styled.button`
border-radius: 8px;
padding: 5px;
margin: 10px;
cursor: pointer;

`
export const Li = styled.li`
   @media(max-width:425px){
    height: 25vh;
    padding-top: 10px;
    width: 200px;
    }
 padding: 20px;
 margin-bottom: 10px;
 text-align: center;
 width: 300px;
 height: 300px;
 border: 1px solid transparent;
 border-radius: 5px;
 box-shadow: 2px 2px 8px grey, -2px -2px 8px grey;
 background-color: lightBlue;
   ${colors}
`

export const Types = styled.div`
display: flex;
gap: 10px;
justify-content: center;
padding-top: 15px;
`

export const Type = styled.p`

  border: 1px solid transparent;
  border-radius: 12px;
  padding: 5px 10px;
  box-shadow: 2px 2px 5px black, -2px -2px 5px black;
  ${colors}
`

