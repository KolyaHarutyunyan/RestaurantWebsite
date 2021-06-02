import {
  GET_MY_BUSINESS,
  EDIT_BUSINESS,
  CREATE_BUSINESS,
  DELETE_BUSINESS,
} from "./businesses.types";

export const businessesActions = {
  getBusinesses: () => ({
    type: GET_MY_BUSINESS,
  }),
  editBusiness: (business) => ({
    type: EDIT_BUSINESS,
    payload: business,
  }),
  createBusiness: (business) => ({
    type: CREATE_BUSINESS,
    payload: business,
  }),
  deleteBusiness: (restaurantId) => ({
    type: DELETE_BUSINESS,
    payload: restaurantId,
  }),
};
