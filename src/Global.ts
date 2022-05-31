import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 400;
      font-size: 1.125rem;
    }
    ul,
    ol,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: "";
      font-size: ${(props) => props.theme.fsize.base || "18px"};
      line-height: 1.5;
      font-family: "Rubik", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #__next, body {
      min-height: 100vh;
    }
    #root, #__next {
    isolation: isolate;
  }
    img, picture, video, canvas, svg {
      max-width: 100%;
      display: block;
    }
    input,
    button {
      border: none;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    @media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
