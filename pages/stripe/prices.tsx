import { useState, useEffect } from 'react'
import Stripe from 'stripe'

const Prices = () => {
  const [prices, setPrices] = useState<Stripe.Price[]>([])

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/stripe/prices")
      const data = await response.json()
      setPrices(data)
    })()
  }, [])

  const handleClickButton = async (priceId: string) => {
    const response = await fetch("/api/stripe/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId })
    })
  }

  return (
    <ul>
      {prices.map(({ id, product, unit_amount }) => (
        <li key={id}>
          <p>{(product as Stripe.Product).name}</p>
          {unit_amount && <p>{unit_amount / 100} / month</p>}
          <button onClick={() => handleClickButton(id)}>select</button>
        </li>
      ))}
    </ul>
  )
}

export default Prices
