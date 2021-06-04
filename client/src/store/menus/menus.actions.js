import { GET_MENUS, EDIT_MENU, CREATE_MENU, DELETE_MENU } from "./menus.types";

export const menusActions = {
  getMenusByBusiness: (businessId) => ({
    type: GET_MENUS,
    payload: businessId,
  }),
  createMenu: (menu) => ({
    type: CREATE_MENU,
    payload: menu,
  }),
  editMenu: (menu) => ({
    type: EDIT_MENU,
    payload: menu,
  }),
  deleteMenu: (menu) => ({
    type: DELETE_MENU,
    payload: menu,
  }),
};
