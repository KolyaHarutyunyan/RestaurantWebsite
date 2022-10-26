import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PayInfo } from "@eachbase/fragments";
import CheckoutForm from "@eachbase/fragments/sections/payments/checkoutForm";
import { CheckoutContainer } from "@eachbase/fragments/sections/payments/styles";
import { MuiBreadcrumbs } from "@eachbase/components";

const stripePromise = loadStripe(
  "pk_test_51LmCY4HoKYb9ljrZSsVQ2feYRtXXW5aoRJtr8AhrdV8HKZ8JNy7dz0F2vRVhDthnVHSGJweWQy9yeri6EQ3rxdtV0019cwvpyY"
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
