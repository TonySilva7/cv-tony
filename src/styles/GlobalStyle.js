import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #c35050;
    --secondary-color: #aa4343;
    --light-color: #f5f5f5;
    --gray-color: #656565;
    --dark-color: #323232;

    --degrade: linear-gradient( 196deg, rgb(218 92 92) 0%, rgba(170,67,67,1) 100% );
    --slow-animate: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    --fast-animate: all 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    --myShadow: 5px 5px 15px 5px #000000ad;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: #2c3336;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    box-sizing: border-box;
  }
`;
