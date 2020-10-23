import React from 'react'
import { Global, css } from '@emotion/core'
import 'normalize.css'
import globalStyles from '../styles/global-styles'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
