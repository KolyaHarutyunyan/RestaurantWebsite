import axios from "axios";

export const menusService = {
  getItems: () => axios.get(`/menu`, { auth: true }),
  editMenu: (menu) =>
    axios.put(`/menu/${menu._id}`, { auth: true, data: menu }),
};
