import { DrinksTabItem, FoodTabItem } from "./core";

export const editMenusBreadcrumbs = [
  { path: "/menus", text: "Menus" },
  { path: "/menus/edit", text: "Menu Name" },
];

export const editMenusTabs = [
  { label: "Food", item: <FoodTabItem /> },
  { label: "Drinks", item: <DrinksTabItem /> },
];
