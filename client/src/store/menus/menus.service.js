import axios from "axios";

export const menusService = {
  getMenusByBusiness: (id) =>
    axios.get(`/menus/bybusiness/${id}`, { auth: true }),
  editMenu: (menu) => axios.patch(`/menus/${menu.id}`, menu, { auth: true }),
  createMenu: (menu) => axios.post(`/menus`, menu, { auth: true }),
  getCurrentMenu: (menuId) => axios.get(`/menus/${menuId}`, { auth: true }),
  switchMenuStatus: ({ menuId, businessId }) =>
    axios.patch(`/menus/${menuId}/toggle`, { businessId }, { auth: true }),
};
