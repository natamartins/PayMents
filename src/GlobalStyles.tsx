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

body{
  background-color: #333;
  color: #f1f1f1;
}

`;
export default GlobalStyles;