import { Stripe } from '@stripe/stripe-js';
import { createContext } from 'react';

type Context = {
  stripe: Stripe | undefined
}

export const StripeContext = createContext<Context>({
  stripe: undefined
})
