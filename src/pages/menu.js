import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import PizzaList from '../components/PizzaList'

export default function menu({ data }) {
  const pizzas = data.pizzas.nodes
  return (
    <Layout>
      <PizzaList pizzas={pizzas} />
    </Layout>
  )
}

export const query = graphql`
  query MenuQuery {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
