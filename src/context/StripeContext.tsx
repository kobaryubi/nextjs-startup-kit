import { Stripe } from '@stripe/stripe-js';
import { createContext, Dispatch, SetStateAction } from 'react';

type SubscriptionData = {
  subscriptionId: string | undefined,
  clientSecret: string | undefined
} | undefined

export type StripeContextType = {
  stripe: Stripe | null,
  subscriptionData: SubscriptionData,
  setSubscriptionData: Dispatch<SetStateAction<SubscriptionData>>
}

export const StripeContext = createContext<StripeContextType>({
  stripe: null,
  subscriptionData: undefined,
  setSubscriptionData: () => {}
})
