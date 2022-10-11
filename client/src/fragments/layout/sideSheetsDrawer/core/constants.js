import { Images } from "@eachbase/theme/images";

export const sideSheetsList = [
  {
    icon: <Images.Menus />,
    text: "Menus",
    path: "/menus",
    pathnames: ["/menus/settings", "/menus/edit"],
  },
  {
    icon: <Images.Settings />,
    text: "Settings",
    path: "/settings",
    pathnames: [],
  },
  {
    icon: <Images.Billing />,
    text: "Billing",
    pages: [
      { text: "Plans and Pricing", path: `/plansAndPricing`, pathnames: [] },
      { text: "Payment", path: `/payment`, pathnames: [] },
    ],
  },
];

export const addActive = (item, pathName) => {
  if (item.path) {
    return item.path === pathName || item.pathnames.includes(pathName)
      ? "active"
      : "";
  } else {
    let isActive = false;
    for (let elem of item.pages) {
      if (elem.path === pathName) isActive = true;
    }
    return isActive ? "active" : "";
  }
};
