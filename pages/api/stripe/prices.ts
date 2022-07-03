import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/libs/stripe'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const prices = await stripe.prices.list({
    lookup_keys: ["sample_basic", "sample_premium"],
    expand: ['data.product']
  })

  res.status(200).json({ prices: prices.data })
};

export default handler;
