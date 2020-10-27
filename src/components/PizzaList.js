import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const PizzaGridStyles = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  grid-auto-rows: auto auto 500px;
  padding: 1rem;
`

const PizzaStyles = styled('div')`
  display: grid;
  /** Take your row sizing not from PizzaStyles div, but from the PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    -rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
  transition: var(--transition);

  h2 {
    background: var(--primaryColor);
    color: var(--lightColor);
    padding: 1rem 0 0 1rem;
    border-radius: var(--borderRadius);
  }
`

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>{pizza.name}</h2>
      </Link>
      <p>{pizza.toppings.map(toppings => toppings.name).join(', ')}</p>
      <Img
        css={css`
          border-radius: var(--borderRadius);
        `}
        fluid={pizza.image.asset.fluid}
        alt={pizza.name}
      />
    </PizzaStyles>
  )
}

export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  )
}
