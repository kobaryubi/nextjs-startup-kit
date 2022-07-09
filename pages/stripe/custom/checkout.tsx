import { useState, useEffect, useMemo } from 'react';
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions } from "@stripe/stripe-js";
import { useStripe } from 'src/hook/useStripe';
import StripeCustomCheckoutForm from '@/components/stripe/StripeCustomCheckoutForm';

const StripeCustomCheckout = () => {
  const [clientSecret, setClientSecret] = useState('')
  const { stripe } = useStripe()

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/stripe/custom/create-payment-intent", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }]})
      })

      const data = await response.json()
      setClientSecret(data.clientSecret)
    })()
  }, [])

  const options = useMemo(() => {
    const appearance: StripeElementsOptions["appearance"] = {
      theme: 'stripe',
    }

    return {
      clientSecret,
      appearance
    }
  }, [clientSecret])

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripe} options={options}>
          <StripeCustomCheckoutForm />
        </Elements>
      )}
    </>
  )
}

export default StripeCustomCheckout
