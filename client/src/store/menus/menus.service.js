import axios from "axios";

export const menusService = {
  getMenusByBusiness: (id) =>
    axios.get(`/menus/bybusiness/${id}`, { auth: true }),
  editMenu: (menu) =>
    axios.put(`/menu/${menu._id}`, { auth: true, data: menu }),
};
