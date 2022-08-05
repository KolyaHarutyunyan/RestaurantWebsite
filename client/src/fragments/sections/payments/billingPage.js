import { Typography } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { BillingContainer } from "./styles";
import { ActivePlan } from "./core";
import { CardInformation } from "./core/cardInformation";
import { InvoiceTable } from "./core/invoiceTable";

export const BillingPage = ({}) => {
  return (
    <BillingContainer>
      <div className="breadcrumb">
        <a href="/plans">Subscription</a>
        <Icons.Arrow />
        <Typography className="bred-menu" color="text">Billig and Payment</Typography>
      </div>
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
          <CardInformation />
        </div>
        <p className="active-plane">Invoices</p>
        <InvoiceTable />
        <div className="cancel-button-wrapper">
          <button className="cancel-button">Cancel Subscribtion</button>
        </div>
      </div>
    </BillingContainer>
  );
};