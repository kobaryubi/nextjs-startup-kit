import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/libs/stripe'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true
    }
  })

  res.status(200).json({ clientSecret: paymentIntent.client_secret, })
};

export default handler;
