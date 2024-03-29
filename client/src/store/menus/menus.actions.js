import {
  GET_MENUS,
  EDIT_MENU,
  CREATE_MENU,
  DELETE_MENU,
  SWITCH_MENU_STATUS,
  GET_CURRENT_MENU,
  GET_ACTIVE_MENUS,
  GET_BUSINESS_MENU, EDIT_CARREGORI_REORDER
} from "./menus.types";
import { REORDER_CATEGORI_REDUCER } from "../businesses/businesses.types";

export const menusActions = {
  getMenusByBusiness: (businessId) => ({
    type: GET_MENUS,
    payload: { businessId },
  }),
  getActiveMenu: (menuId) => ({
    type: GET_ACTIVE_MENUS,
    payload: menuId,
  }),
  getBusinessMenu: (menuId, load) => ({
    type: GET_BUSINESS_MENU,
    payload: { menuId, load },
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
  editMenuOrder: (move,categoryType, type, catId) => ({
    type: EDIT_CARREGORI_REORDER,
    payload: {move, categoryType, type, catId},
  })

};
