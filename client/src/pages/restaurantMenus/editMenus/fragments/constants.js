import { CategoryTabItem } from "./core";

const category = {
  names: ["food", "drinks"],
  types: ["FOOD", "DRINK"],
};

export const getMenusBreadcrumbs = (menuName = "") => {
  return [
    { path: "/menus", text: "Menus" },
    { path: "/menus/edit", text: menuName },
  ];
};

export const editMenusTabs = [
  {
    label: "Food",
    item: (
      <CategoryTabItem
        categoryName={category.names[0]}
        categoryType={category.types[0]}
      />
    ),
  },
  {
    label: "Drinks",
    item: (
      <CategoryTabItem
        categoryName={category.names[1]}
        categoryType={category.types[1]}
      />
    ),
  },
];
