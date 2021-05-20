import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --ff-main: 'Nunito Sans', sans-serif;
    --fw-100: 300;
    --fw-200: 600;
    --fw-300: 800;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul[class] {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    margin: 0;
    font-family: var(--ff-main);
  }
`;

export default GlobalStyle;
