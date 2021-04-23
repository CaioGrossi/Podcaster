import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }

      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }

      body {
        background-color: ${theme.colors.gray50};
      }

      body,
      input,
      textarea,
      button {
        font: 500 1rem Inter, sans-serif;
        color: ${theme.colors.gray500};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        font-family: Lexend, sans-serif;
        color: ${theme.colors.gray800};
      }

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem.;
      }

      button {
        cursor: pointer;
      }
    `}
`;

export default GlobalStyles;
