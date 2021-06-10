import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root {
     margin: 0;
     width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
  }
`;

export default GlobalStyle;
