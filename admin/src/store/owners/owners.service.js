import axios from "axios";

export const ownersService = {
  getOwnersService: ( ) => axios.get(`/owners`, { auth: true }),

  deleteOwner: ( id ) => axios.delete(`/owners/${id}`, { auth: true }),
};