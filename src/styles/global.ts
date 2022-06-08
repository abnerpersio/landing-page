import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Inter', 'Lato', sans-serif;
    box-sizing: border-box;
  }
  
  body, html {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
