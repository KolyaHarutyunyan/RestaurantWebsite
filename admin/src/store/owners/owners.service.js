import axios from "axios";

export const ownersService = {
  getOwnersService: ( ) => axios.get(`/businesses`, { auth: true }),

  deleteOwner: ( id ) => axios.delete(`/owners/${id}`, { auth: true }),
};