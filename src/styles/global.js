import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height:100%;
  padding: 0.5%;
  display: flex;
  flex-direction: column;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialised !important;
  font-family: 'Montserrat',sans-serif;
  color: #fafafa;
  font-size: 30px;
  background-color: #3c4556;
}

`;

export default GlobalStyle;
