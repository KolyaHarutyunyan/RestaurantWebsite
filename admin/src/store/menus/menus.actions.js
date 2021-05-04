import { GET_MENUS, EDIT_MENU } from "./menus.types";

export const menusActions = {
  getMenuItems: () => ({
    type: GET_MENUS,
  }),
  editMenu: (menu) => ({
    type: EDIT_MENU,
    payload: menu,
  }),
};
