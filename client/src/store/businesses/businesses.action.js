import {
    GET_MY_BUSINESS,
    EDIT_BUSINESS,
    CREATE_BUSINESS,
    DELETE_BUSINESS,
    GET_CURRENT_BUSINESS, GET_BUSINESS_BY_ID,
} from "./businesses.types";

export const businessesActions = {
    getBusinesses: () => ({
        type: GET_MY_BUSINESS,
    }),
    getBusinessesById: (id) => ({
        type: GET_BUSINESS_BY_ID,
        payload: id
    }),
    editBusiness: (business) => ({
        type: EDIT_BUSINESS,
        payload: business,
    }),
    createBusiness: (business) => ({
        type: CREATE_BUSINESS,
        payload: {business},
    }),
    deleteBusiness: (restaurantId) => ({
        type: DELETE_BUSINESS,
        payload: restaurantId,
    }),
    getCurentBusiness: (businessId) => ({
        type: GET_CURRENT_BUSINESS,
        payload: businessId,
    }),
};
