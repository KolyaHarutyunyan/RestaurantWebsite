// import {loadStripe} from "@stripe/stripe-js";
//
// export async function checkout({lineItems}){
//   let stripePromise = null
//
//   const getStripe = () => {
//     if(!stripePromise){
//       stripePromise = loadStripe('pk_test_51LPm9qL4pro3KzC9ZdcZLKSOQuZCwacegagY17KtxY8QlRxecUhIriHncjwUVLsffspIhIEUcEYWRVDL9YP0KMLy00PslKiMpN')
//     }
//     return stripePromise
//   }
//
//   const stripe = await getStripe()
//
//   await stripe.redirectToCheckout({
//     mode: 'payment',
//     lineItems,
//     successUrl:`http://localhost:3000/?session_id=pk_test_51LPm9qL4pro3KzC9ZdcZLKSOQuZCwacegagY17KtxY8QlRxecUhIriHncjwUVLsffspIhIEUcEYWRVDL9YP0KMLy00PslKiMpN`,
//     cancelUrl: 'http://localhost:3000/'
//   })
// }

import React, { useState } from "react";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
import { PayInfo } from "@eachbase/fragments";
import CheckoutForm from "@eachbase/fragments/sections/payments/checkoutForm";
import { CheckoutContainer } from "@eachbase/fragments/sections/payments/styles";

const stripePromise = loadStripe(
  "pk_test_51LPm9qL4pro3KzC9ZdcZLKSOQuZCwacegagY17KtxY8QlRxecUhIriHncjwUVLsffspIhIEUcEYWRVDL9YP0KMLy00PslKiMpN"
);

export const getStaticProps = async (ctx) => {
  const stripe = new Stripe(
    "sk_test_51LPm9qL4pro3KzC9xiyiraypdCNtnPFb5NgC5B8237KW4EbH6FNbUMdetNe3YFPq0HH7ghXyq9PFzvfXqifYy0jZ00qljeLraV"
  );

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent,
      },
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 2500,
    currency: "usd",
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent,
    },
  };
};

const CheckoutPage = ({ paymentIntent }) => {
  const [checked, setChecked] = useState(false);

  const handleSetChecked = () => {
    setChecked(!checked);
  };

  return (
    <CheckoutContainer>
      {/*<Head>{props.meta || <title>Welcome menuz</title>}</Head>*/}
      <div className="checkout-container-wrapper">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            paymentIntent={paymentIntent}
            setChecked={handleSetChecked}
            checked={checked}
          />
        </Elements>
        <div>
          <PayInfo checked={checked} setChecked={handleSetChecked} />
        </div>
      </div>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
