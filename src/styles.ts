import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#ffffff',
  salmao: '#e66767',
  salmaoClaro: '#ffebd9',
  bege: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.salmao};
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1080px) {
    .container {
      width: 90%;
    }
  }
`