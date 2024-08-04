
import { styled } from "styled-components"

export const Header = styled.header`
    display: flex;
    width: 100vw;
    max-height: 25%;
    font-size: 16px;
    justify-content: space-between;
    background-color: rgb(220, 75, 75);
    

`

export const Div = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    justify-self: center;
    align-self: center;

       @media(max-width:425px){
       flex-direction: column;
       padding: 5px;
    
    }
`

export const ImgLogo = styled.img`
    width: 30vw;
`

export const Img = styled.img`
 height: 4vh;
 padding-right: 8px;
  align-self: center;

     @media(max-width:425px){
      display: none;
    
    }
`

export const Select = styled.select`
   align-self: center;
   height: 3vh;
   width: 15vw;
   border-radius: 10px;
   text-align: center;

  @media(max-width:425px){
    width: 20vw;
    margin-left: 8px;
    
    }
`

export const Input = styled.input`
  align-self: center;
  width: 25vw;
  height: 3vh;
  border-radius: 10px;
  text-align: center;

 
`

export const Button = styled.button`
border-radius: 8px;
padding: 5px;
margin: 5px;
cursor: pointer;
`

