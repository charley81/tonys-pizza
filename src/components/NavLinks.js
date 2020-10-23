import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavItem = styled(Link)`
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: var(--transition);
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--primaryColor);
    height: 1px;
    transition: var(--transition);
  }

  :hover {
    color: var(--primaryColor);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export default function NavLinks() {
  return (
    <>
      <NavItem to="/">Hot</NavItem>
      <NavItem to="/menu">Menu</NavItem>
      <NavItem to="/staff">Staff</NavItem>
      <NavItem to="/order">Order</NavItem>
    </>
  )
}
