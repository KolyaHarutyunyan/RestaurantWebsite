import { Icons } from "@eachbase/theme";

// ACTIVE_PLAN_CONSTANTS
export const standardData = [
  { icon: <Icons.Date />, text: "Started Date", highlightedText: "02/02.2022" },
  { icon: <Icons.Status />, text: "Status", highlightedText: "Paid" },
  { icon: <Icons.Price />, text: "Price", highlightedText: "$25" },
];

export const yourPlanFeatures = [
  { text: "Menu list with items (description ,ingredients)" },
  { text: "Feedback" },
  { text: "Analytics" },
  { text: "Recommendation" },
  { text: "20 FREE Contactless Cards" },
];

// PAYMENT_METHOD_CONSTANTS
export const addedCards = [
  {
    id: "1",
    type: "Visa",
    icon: <Icons.VisaCard />,
    expirationDate: "06/24",
    cardNumbers: "458923******8965",
  },
];

// INVOICE_TABLE_CONSTANTS
export const invoiceTHeadCaptions = [
  { width: "300px", caption: "date" },
  { width: "300px", caption: "items" },
  { width: "300px", caption: "cost" },
  { width: "165px", caption: "action" },
];

export const invoiceTBodyData = [
  {
    id: "1",
    date: "Feb 02,2022",
    items: "Standart Plan Menumango",
    cost: "$25",
  },
  {
    id: "2",
    date: "Feb 02,2022",
    items: "Standart Plan Menumango",
    cost: "$25",
  },
  {
    id: "3",
    date: "Feb 02,2022",
    items: "Standart Plan Menumango",
    cost: "$25",
  },
];

export const getInvoices = (invoices = []) => {
  return invoices.map((invoice) => ({
    date: invoice.date,
    items: invoice.items,
    cost: invoice.cost,
  }));
};
