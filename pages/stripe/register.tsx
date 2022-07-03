import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
};

const StripeRegister = () => {
  const { handleSubmit, register } = useForm<FormValues>()
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = async ({ email }) => {
    const response = await fetch("/api/stripe/create-customer", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    const data = await response.json()
    router.push("/stripe/prices")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", { required: true })}
      />
      <button type="submit">register</button>
    </form>
  )
}

export default StripeRegister
