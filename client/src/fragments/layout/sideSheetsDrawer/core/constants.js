import { Images } from "@eachbase/theme/images";

export const sideSheetsList = [
  { icon: <Images.Menus />, text: "Menus", path: "/menus" },
  { icon: <Images.Settings />, text: "Settings", path: "/settings" },
  {
    icon: <Images.Billing />,
    text: "Billing",
    pages: [
      { text: "Plans and Pricing", path: `/plansAndPricing` },
      { text: "Payment", path: `/payment` },
    ],
  },
];

export const addActive = (item, pathName) => {
  if (item.path) {
    return item.path === pathName ? "active" : "";
  } else {
    let isActive = false;
    for (let elem of item.pages) {
      if (elem.path === pathName) isActive = true;
    }
    return isActive ? "active" : "";
  }
};
