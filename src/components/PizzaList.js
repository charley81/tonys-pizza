import React from 'react'
import { Link } from 'gatsby'

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>{pizza.name}</h2>
        <p>{pizza.toppings.map(toppings => toppings.name)}</p>
      </Link>
    </div>
  )
}

export default function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}
