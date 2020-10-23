import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --darkColor: rgb(37, 37, 37);
            --medColor: rgb(115, 115, 115);
            --lightColor: rgb(255, 255, 255);
            --primaryColor: #cc2936;
            --borderRadius: 3px;
            --transition: all 0.3s linear;
          }

          body {
            font-family: "Inconsolata", monospace;
            background: var(--lightColor);
            color: var(--medColor);
            font-size: 18px;
          }

          img {
            max-width: 100%;
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
        `}
      />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
