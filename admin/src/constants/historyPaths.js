export const BROWSER_HISTORY_PATHS = {
  BASE: "/",
  RESTAURANTS: {
    BASE: "/restaurants",
    MENUS: "/restaurants/:restaurantId",
    CATEGORIES: "/restaurants/:restaurantId/:menuId",
    MENU_ITEMS: "/restaurants/:restaurantId/:menuId/:categoryId",
  },
};
