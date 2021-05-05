import { PROFILE_SIGN_IN_SUCCESS, PROFILE_SIGN_OUT } from "./profile.types";

const initialState = {
  email: "",
  fullName: "",
  id: "",
  role: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SIGN_IN_SUCCESS:
      return {
        fullName: action.payload.fullName,
        email: action.payload.email,
        id: action.payload.id,
        role: action.payload.role,
      };
    case PROFILE_SIGN_OUT:
      return {
        email: "",
        fullName: "",
        id: "",
        role: "",
      };

    default:
      return state;
  }
};
