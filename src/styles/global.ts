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
    
}

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 13px;

    @media (min-width: 375px) {
      font-size: 14px;
    }

    @media (min-width: 500px) {
      font-size: 16px;
    }

    @media (min-width: 720px) {
      font-size: 18px;
    }

    @media (min-width: 1280px) {
      font-size: 19px;
    }

    @media (min-width: 1600px) {
      font-size: 21px;
    }
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

  h1 {
    font-size: 2.3em;
  }

  h3 {
    font-size: 1.3em;
  }

  

  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }
  
`;
