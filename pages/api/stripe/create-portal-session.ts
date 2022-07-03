import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/libs/stripe'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { session_id } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id)

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer as string,
    return_url: `${req.headers.origin}/stripe/checkout`
  })

  res.status(200).json(portalSession)
};

export default handler;
