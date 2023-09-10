"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  :focus {
    outline: none;
  }
}
`;
export default GlobalStyles;