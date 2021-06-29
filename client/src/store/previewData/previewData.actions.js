import { GET_PREVIEW_MENU_DATA } from "./previewData.types";

export const previewDataActions = {
  getMenuData: (menuId) => ({
    type: GET_PREVIEW_MENU_DATA,
    payload: menuId,
  }),
};
