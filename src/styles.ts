import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#ffffff',
  salmao: '#e66767',
  salmaoEscuro: '#c84f4f',
  salmaoClaro: '#fff0e6',
  bege: '#fffaf6',
  texto: '#2d2d2d',
  textoSecundario: '#6f6f6f',
  borda: '#f0ddd5'
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
    color: ${cores.texto};
    -webkit-font-smoothing: antialiased;
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
    max-width: 1120px;
    width: calc(100% - 48px);
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .container {
      width: calc(100% - 32px);
    }
  }
`