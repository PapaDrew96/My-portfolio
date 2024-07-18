import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
  }

  nav {
    background: #333;
    padding: 1rem;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 0;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
  }

  p {
    color: #666;
  }
`;

export default GlobalStyle;
