import React from "react";
import { StyledRestaurantPayment } from "./style";
import Typography from "@mui/material/Typography";
import { ActivePlan } from "./core/activePlan";
import { PaymentMethod } from "./core/paymentMethod";
import { InvoiceTable } from "./core/invoiceTable";
import { Images } from "@eachbase/theme/images";

export const RestaurantPaymentFragment = () => {
  return (
    <StyledRestaurantPayment>
      <div className="billing-wrapper">
        <Typography weight="bold" className="g-title" color="text">
          Billing And Payment
        </Typography>
        <p className="active-plane">Active plan</p>
        <div className="cards-wrapper">
          <ActivePlan />
        </div>
        <p className="active-plane">Payment Method</p>
        <div className="cards-wrapper">
          <PaymentMethod />
        </div>
        <p className="active-plane">Invoices</p>
        <InvoiceTable />
        <div className="cancel-button-wrapper">
          <button className="cancel-button">Cancel Subscribtion</button>
          <Images.Info />
        </div>
      </div>
    </StyledRestaurantPayment>
  );
};
