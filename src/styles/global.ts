import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Raleway';

    --primary: #000;
    --secondary: #4f4f4f;
    --accent: #f7df94;

  }

  body {
    box-sizing: border-box;
    background-color: #fff;
    -webkit-font-smoothing: antialised;
    margin: 0 20vw;

  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;

  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-weight: 500;

  }

  h1, h2, h3, h4, h5, h6  {
    font-family: 'Raleway';
    font-weight: 700;
  }

  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

`;
