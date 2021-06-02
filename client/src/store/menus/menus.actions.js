import { GET_MENUS, EDIT_MENU } from "./menus.types";

export const menusActions = {
  getMenusByBusiness: (businessId) => ({
    type: GET_MENUS,
    payload: businessId,
  }),
  editMenu: (menu) => ({
    type: EDIT_MENU,
    payload: menu,
  }),
};
