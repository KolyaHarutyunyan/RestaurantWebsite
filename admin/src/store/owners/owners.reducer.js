import { GET_OWNERS_SUCCESS, SEARCH_OWNERS } from "./owners.types";
import { paginate } from "@eachbase/utils";

const initialState = {
  ownersList: [],
  reserveOwners: []
};

export const ownersReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_OWNERS_SUCCESS:
      return {
        ...state,
        ownersList: paginate((action.payload), 10),
        reserveOwners: action.payload
      };

    case SEARCH_OWNERS:
      return {
        ...state,
        ownersList: paginate(state.reserveOwners.filter((el) => el.fullName.toLowerCase().indexOf(action.payload.toLowerCase()) > -1), 10)
      };

    default:
      return state;
  }
};
