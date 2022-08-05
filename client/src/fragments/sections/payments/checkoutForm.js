import React, { useState } from "react";
import { CardElement, useStripe, useElements, CardNumberElement } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
import { Loader, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";

const CheckoutForm = ({ paymentIntent, checked, setChecked }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { open } = useModal();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoader(true);
    try {
      const {
        error,
        paymentIntent: { status }
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });


      if (error) throw new Error(error.message);

      if (status === "succeeded") {
        setLoader(false);
        // setCheckoutSuccess(true);
        destroyCookie(null, "paymentIntentId");
        open(MODAL_NAMES.CHECK_PAYMENT_HELPER);
      }
    } catch (err) {
      setLoader(false);
      // alert(err.message);
      setCheckoutError(err.message);
    }
  };

  // if (checkoutSuccess) return <p>Payment successful!</p>;

  const cardElementOptions = {
    style: {
      base: {
        color: "#666",
        fontSize: "16px"
      },
      invalid: {
        color: "#fa755a",
        fontSize: "16px"
      }
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>

        <div>
          <p className="title">Card Number</p>
          <div className="card-element">
            <CardElement options={cardElementOptions} />
          </div>
          {checkoutError && <span style={{ color: "red", fontSize: "12px" }}>{checkoutError}</span>}
        </div>
        <p className="title">Name Surname</p>
        <input className="input-style" required={true} />
        <p className="title">Phone Number</p>
        <input className="input-style" required={true} />
        <div className="buttons-wrapper">
          <button
            className="next-button"
            type="submit"
            style={checked === false ? { background: "gray" } : {}}
            disabled={checked === false}
          >
            {loader ?
              <Loader small={true} color="white" />
              :
              "Pay"
            }
          </button>
          <button
            className="cancel-button"
            type={"button"}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;