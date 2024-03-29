import axios from "axios";

export const menusService = {
  getMenusByBusiness: (businessId) =>
    axios.get(`/menus/bybusiness/${businessId}`, { auth: true }),

  getActiveMenus: (id) => axios.get(`/menus/active/${id}`, { auth: false }),

  getBusinessMenu: (id) => axios.get(`/menus/${id}`, { auth: true }),

  editMenu: (menu) => axios.patch(`/menus/${menu.id}`, menu, { auth: true }),

  deleteMenu: (menuId) => axios.delete(`/menus/${menuId}`, { auth: true }),

  createMenu: (menu) => axios.post(`/menus`, menu, { auth: true }),

  getCurrentMenu: (menuId) => axios.get(`/menus/${menuId}`, { auth: true }),

  switchMenuStatus: (menuId) =>
    axios.patch(`/menus/${menuId}/toggle`, {}, { auth: true }),
};
