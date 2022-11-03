import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PayInfo } from "@eachbase/fragments";
import CheckoutForm from "@eachbase/fragments/sections/payments/checkoutForm";
import { CheckoutContainer } from "@eachbase/fragments/sections/payments/styles";
import { MuiBreadcrumbs } from "@eachbase/components";

const stripePromise = loadStripe(
  "pk_test_51LmCY4HoKYb9ljrZoGdppsVebwpoEdy464xiqERqYUD69cenEagijTovG6OFvaL71GCNMlm5v2yfpFnNWFlEgZoA00toGW6jzS"
);

export const plansCheckoutBreadcrumbs = [
  { path: "/plansAndPricing", text: "Plans and Pricing" },
  { path: "/plansAndPricing/checkout", text: " Card Information" },
];

const CheckoutPage = ({}) => {
  const [checked, setChecked] = useState(false);

  const handleSetChecked = () => {
    setChecked(!checked);
  };

  return (
    <CheckoutContainer>
      <MuiBreadcrumbs breadcrumbs={plansCheckoutBreadcrumbs} />
      <div className="checkout-container-wrapper">
        <Elements stripe={stripePromise}>
          <CheckoutForm setChecked={handleSetChecked} checked={checked} />
        </Elements>
        <div>
          <PayInfo checked={checked} setChecked={handleSetChecked} />
        </div>
      </div>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
