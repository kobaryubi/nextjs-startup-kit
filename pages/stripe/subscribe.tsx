import {
  CardElement,
} from '@stripe/react-stripe-js';

import { useState } from "react"
import { useForm } from "react-hook-form"

const StripeSubscribe = () => {
  const [message, setMessage] = useState('')
  const { handleSubmit, register } = useForm()

  const onSubmit = () => {}

  return (
    <>
      <p>test card: 4242424242424242</p>
      <p>test card that requires SCA: 4000002500003155</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
        />
        <CardElement />
        <button type="submit">subscribe</button>
      </form>
      <p>{message}</p>
    </>
  )
}

export default StripeSubscribe
