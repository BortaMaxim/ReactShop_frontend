import React from 'react';
import Checkout from "./Checkout";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripeKey = 'pk_test_51L72B0KLFY3MvAs6CiPire7KQoiLDyyRSI1iWJcaM4t6yfaydWD9c18zDnRdfryycH43bs6S5PMiakCr4c4C7sNL00XGlQT4sc'
const stripePromise = loadStripe(stripeKey)

export const CheckoutContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <Checkout />
        </Elements>
    );
}
