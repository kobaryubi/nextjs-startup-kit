import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/libs/stripe'
import { serialize } from 'cookie'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email } = req.body;
  const { data } = await stripe.customers.list({ email });
  const customer = data.length >= 1 ? data[0] : await stripe.customers.create({ email })

  res.setHeader("Set-Cookie", serialize("customer", customer.id, { maxAge: 900000, httpOnly: true }))
  res.status(200).json({ customer })
};

export default handler;
