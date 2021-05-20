import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --ff-main: 'Nunito Sans', sans-serif;
    --fw-100: 300;
    --fw-200: 600;
    --fw-300: 800;
    --fs-100: .875rem;
    --fs-200: 1rem;
    --fs-300: 1.2rem;
    --fs-400: 1.4rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

 
  p {
    margin: 0;
    line-height: 1.8;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    line-height: 1.2;
  }

  ul[class] {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    margin: 0;
    font-family: var(--ff-main);
    font-weight: var(--fw-100);
  }
`;

export default GlobalStyle;
