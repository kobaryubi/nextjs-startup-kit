import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useStripe } from 'src/hook/useStripe';

const ProductDisplay = () => {
  const {
    handleSubmit
  } = useForm()
  const { stripe } = useStripe()

  const onSubmit = async () => {
    const url = "/api/stripe/create-checkout-session"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lookup_key: "test_subscription_product" })
    })
    const data = await response.json()

    if (!stripe) {
      return;
    }
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.id
    })
    console.warn(error.message)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Checkout</button>
    </form>
  )
}

const SuccessDisplay = ({ sessionId }: {sessionId: string}) => {
  const { handleSubmit } = useForm()

  const onSubmit = async () => {
    const url = "/api/stripe/create-portal-session"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ session_id: sessionId })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <p>successed</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">portal</button>
      </form>
    </div>
  )
}

const Message = ({ message }: { message: string }) => {
  return (
    <p>{message}</p>
  )
}

const StripeCheckout = () => {
  const [message, setMessage] = useState('')
  const [sessionId, setSettionId] = useState('')
  const [hasSuccessed, setHasSuccessed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { success, canceled, session_id } = router.query
    if (success) {
      setHasSuccessed(true)
      setSettionId(session_id as string)
    }

    if (canceled) {
      setHasSuccessed(false)
      setMessage("canceled")
    }
  }, [router.isReady, router.query])

  if (!hasSuccessed && !message) {
    return <ProductDisplay />
  }

  if (hasSuccessed && sessionId) {
    return <SuccessDisplay sessionId={sessionId} />
  }
  
  return <Message message={message} />
}

export default StripeCheckout;
