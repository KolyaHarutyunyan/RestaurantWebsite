import { DELETE_OWNER, GET_OWNERS, SEARCH_OWNERS } from "./owners.types";

export const ownersActions = {
  getOwners: (id) => ({
    type: GET_OWNERS,
    payload: id,
  }),

  searchOwners: (name) => ({
    type:SEARCH_OWNERS,
    payload: name
  }),

  deleteOwners: (id) => ({
    type:DELETE_OWNER,
    payload: id
  })
};
