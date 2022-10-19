import { DrinksTabItem, FoodTabItem } from "./core";

export const getMenusBreadcrumbs = (menuName = "") => {
  return [
    { path: "/menus", text: "Menus" },
    { path: "/menus/edit", text: menuName },
  ];
};

export const editMenusTabs = [
  { label: "Food", item: <FoodTabItem /> },
  { label: "Drinks", item: <DrinksTabItem /> },
];
