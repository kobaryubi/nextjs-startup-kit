import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useStripeSubscription } from 'src/hook/useStripeSubscription'
import Stripe from 'stripe'

const Prices = () => {
  const [prices, setPrices] = useState<Stripe.Price[]>([])
  const { setSubscriptionData } = useStripeSubscription()
  const router = useRouter()

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/stripe/prices")
      const { prices } = await response.json()
      setPrices(prices)
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

    const { subscriptionId, clientSecret } = await response.json()
    setSubscriptionData({ subscriptionId, clientSecret })
    router.push("/stripe/subscribe")
  }

  return (
    <ul>
      {prices.map(({ id, product, unit_amount }) => (
        <li key={id}>
          <p>{(product as Stripe.Product).name}</p>
          {unit_amount && <p>${unit_amount / 100} / month</p>}
          <button onClick={() => handleClickButton(id)}>select</button>
        </li>
      ))}
    </ul>
  )
}

export default Prices
