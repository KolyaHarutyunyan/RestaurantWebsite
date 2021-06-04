import axios from "axios";

export const menusService = {
  getMenusByBusiness: (id) =>
    axios.get(`/menus/bybusiness/${id}`, { auth: true }),
  editMenu: (menu) => axios.patch(`/menus/${menu.id}`, menu, { auth: true }),
  createMenu: (menu) => axios.post(`/menus`, menu, { auth: true }),
};
