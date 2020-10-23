import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavStyles = styled('nav')`
  background: red;
`

export default function Header() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/staff">Staff</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
