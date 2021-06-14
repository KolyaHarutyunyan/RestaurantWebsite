import {
  GET_MENUS,
  EDIT_MENU,
  CREATE_MENU,
  DELETE_MENU,
  SWITCH_MENU_STATUS,
  GET_CURRENT_MENU,
} from "./menus.types";

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
  getCurrentMenu: (menuId) => ({
    type: GET_CURRENT_MENU,
    payload: menuId,
  }),
  switchMenuStatus: (menuId, businessId) => ({
    type: SWITCH_MENU_STATUS,
    payload: { menuId, businessId },
  }),
};
