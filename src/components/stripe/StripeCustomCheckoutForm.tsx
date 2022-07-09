import { useEffect, useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { useForm } from "react-hook-form"
import { useRouter } from 'next/router';

const StripeCustomCheckoutForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()
  const stripe = useStripe();
  const elements = useElements()
  const [message, setMessage] = useState("")
  const router = useRouter()

  const onSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:4000/stripe/custom/checkout"
      }
    })
  }

  useEffect(() => {
    if (!stripe || !router.isReady) {
      return;
    }

    const clientSecret = router.query["payment_intent_client_secret"]
    if (typeof clientSecret !== "string") {
      return
    }

    (async () => {
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
      if (!paymentIntent) {
        return
      }

      if (paymentIntent.status === "succeeded") {
        setMessage("Payment succeeded")
      }
    })()
  }, [router.isReady, router.query, stripe])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PaymentElement />
      <button disabled={isSubmitting || !stripe || !elements}>pay</button>
      <p>{message}</p>
    </form>
  )
}

export default StripeCustomCheckoutForm
