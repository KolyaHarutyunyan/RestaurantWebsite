import React from "react";
import { PayInfoContainer } from "./styles";
import { colors, Icons } from "@eachbase/theme";
import { Checkbox } from "@material-ui/core";

export const PayInfo = ({ checked, setChecked }) => {
  return (
    <PayInfoContainer>
      <p className="price-title">Order Summary</p>
      <div className="plane-type">
        <p>Standart</p>
        <p>
          $25 <span style={{ color: colors.lightGray }}>/MO</span>
        </p>
      </div>

      <div className="items-wrapper">
        <div className="icon-wrapper">
          <Icons.CheckPayment />
        </div>
        <p className="features-text">
          Menu list with items (description ,ingredients)
        </p>
      </div>
      <div className="items-wrapper">
        <div className="icon-wrapper">
          <Icons.CheckPayment />
        </div>
        <p className="features-text">Feedback</p>
      </div>
      <div className="items-wrapper">
        <div className="icon-wrapper">
          <Icons.CheckPayment />
        </div>
        <p className="features-text">Analytics</p>
      </div>
      <div className="items-wrapper">
        <div className="icon-wrapper">
          <Icons.CheckPayment />
        </div>
        <p className="features-text">Recommendation</p>
      </div>
      <div className="items-wrapper">
        <div className="icon-wrapper">
          <Icons.CheckPayment />
        </div>
        <p className="features-text">20 FREE Contactless Cards</p>
      </div>

      <div className="plane-type">
        <p>Total to pay</p>
        <p>$25</p>
      </div>

      <div className="check-wrapper">
        <Checkbox
          style={{ color: "#007AFF", padding: 0 }}
          checked={checked}
          name="available"
          onChange={setChecked}
        />
        <p className="check-text-style">
          I have read and agree to the <br />
          <a href="">Terms of Service </a>
          and
          <a href=""> Privacy Policy.</a>
        </p>
      </div>
    </PayInfoContainer>
  );
};
