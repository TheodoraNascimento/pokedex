import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle `
 
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

  html{
       min-height: 100vh;
       min-width: 100vw;
       scroll-behavior: smooth;  
  } 

  body{
   font-family: 'Exo 2';
   }
  
   li{
      list-style: none;
   }
   
   a{
   text-decoration: none;
   color: #000;
   }

`

export default GlobalStyled