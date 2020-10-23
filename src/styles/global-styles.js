import { css } from '@emotion/core'

const globalStyles = css`
  :root {
    --darkColor: rgb(37, 37, 37);
    --medColor: rgb(115, 115, 115);
    --lightColor: rgb(255, 255, 255);
    --primaryColor: #cc2936;
    --borderRadius: 3px;
    --transition: all 0.3s linear;
  }

  body {
    font-family: 'Inconsolata', monospace;
    background: var(--lightColor);
    color: var(--medColor);
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--darkColor);
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--darkColor);
  }

  .center {
    text-align: center;
  }

  button {
    background: var(--primaryColor);
    color: var(--lightColor);
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
`

export default globalStyles
