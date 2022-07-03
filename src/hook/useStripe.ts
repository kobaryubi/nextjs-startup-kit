import { useContext } from "react";
import { StripeContext } from "src/context/StripeContext";

export const useStripe = () => useContext(StripeContext)