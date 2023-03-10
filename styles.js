import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    padding: 2rem;
    margin: 2rem;
    text-align: center;
    background-color: lightblue;
  }
`;
