import { Images } from "@eachbase/theme/images";
const userInfo = typeof window !== "undefined" && JSON.parse(localStorage.getItem("menuUser"));


export const sideSheetsList =
  // userInfo?.subscription ?
    [
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
      {
        text: "Plans and Pricing",
        path: "/plansAndPricing",
        pathnames: ["/plansAndPricing/checkout"],
      },
      { text: "Payment", path: "/payment", pathnames: [] },
    ],
  },
]
// :
//     [
//       {
//         icon: <Images.Settings />,
//         text: "Plans and Pricing",
//         path: "/plansAndPricing",
//         pathnames: ["/plansAndPricing/checkout"],
//       },
//     ]
;

export const addActive = (item, pathName) => {
  if (item.path) {
    return item.path === pathName || item.pathnames.includes(pathName)
      ? "active"
      : "";
  } else {
    let isActive = false;
    for (let elem of item.pages) {
      if (elem.path === pathName || elem.pathnames.includes(pathName))
        isActive = true;
    }
    return isActive ? "active" : "";
  }
};
