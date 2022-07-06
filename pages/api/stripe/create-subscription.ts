import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/libs/stripe'
import Stripe from 'stripe';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const customerId = req.cookies["customer"];
  const priceId = req.body.priceId

  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: "default_incomplete",
    expand: ["latest_invoice.payment_intent"]
  })

  const invoice = subscription.latest_invoice as Stripe.Invoice
  const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent

  res.status(200).json({
    subscriptionId: subscription.id,
    clientSecret: paymentIntent.client_secret
  })
};

export default handler;
