import { useState } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import Script from 'next/script'
import { Stripe } from '@stripe/stripe-js';
import { StripeContext, StripeContextType } from 'src/context/StripeContext';

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [stripe, setStripe] = useState<Stripe>()
  const [subscriptionData, setSubscriptionData] = useState<StripeContextType["subscriptionData"]>()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StripeContext.Provider value={{stripe, subscriptionData, setSubscriptionData}}>
            <Component {...pageProps} />
          </StripeContext.Provider>
        </Provider>
      </QueryClientProvider>
      <Script
        src="https://js.stripe.com/v3/"
        onLoad={() => {
          if (!window.Stripe) {
            return;
          }

          setStripe(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''))
        }}
      />
    </>
  )
}

export default MyApp
