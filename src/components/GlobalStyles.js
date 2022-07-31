import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    font-family: 'Roboto', sans-serif;
    transition: all 100ms linear;
  }
`