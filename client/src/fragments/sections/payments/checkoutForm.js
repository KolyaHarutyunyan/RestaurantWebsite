import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Loader, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import axios from "axios";

const CheckoutForm = ({ checked }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { open } = useModal();
  const [checkoutError, setCheckoutError] = useState();
  const [loader, setLoader] = useState(false);
  const [inputs, setInputs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card")
      });

      const info = {
        name: inputs?.name,
        email: inputs?.email,
        paymentMethod: paymentMethod?.paymentMethod?.id,
        productId: "prod_Mar5vnZEX3QwEL",
        amount: 25
      };
      axios.post("/payments/sub", { ...info }, { auth: true }).then((e) => {
        setLoader(false);
        open(MODAL_NAMES.CHECK_PAYMENT_HELPER);
      }).catch(() => {
        setLoader(false);
      });
    } catch (err) {
      setCheckoutError(err.message);
      setLoader(false);
    }
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   setLoader(true);
  //   try {
  //     const {
  //       error,
  //       paymentIntent: { status }
  //     } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement)
  //       }
  //     });
  //
  //
  //     if (error) throw new Error(error.message);
  //
  //     if (status === "succeeded") {
  //       setLoader(false);
  //       // setCheckoutSuccess(true);
  //       destroyCookie(null, "paymentIntentId");
  //       open(MODAL_NAMES.CHECK_PAYMENT_HELPER);
  //     }
  //   } catch (err) {
  //     setLoader(false);
  //     // alert(err.message);
  //     setCheckoutError(err.message);
  //   }
  // };

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

  const handleChange = e => {
    setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
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
        <input
          name="name"
          className="input-style"
          required={true}
          onChange={handleChange}
        />
        <p className="title">Email</p>
        <input
          name="email"
          type="email"
          className="input-style"
          required={true}
          onChange={handleChange}
        />
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