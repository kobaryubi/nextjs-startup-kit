import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from "stripe"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2020-08-27' })
  const prices = await stripe.prices.list({
    lookup_keys: [req.body.lookup_key],
    expand: ['data.product'],
  });
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: prices.data[0].id,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${req.headers.origin}/stripe/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/stripe/checkout?canceled=true`,
  });

  res.status(200).json(session)
};

export default handler;
