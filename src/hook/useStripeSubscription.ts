import { useContext } from "react";
import { StripeContext } from "src/context/StripeContext";

export const useStripeSubscription = () => useContext(StripeContext)