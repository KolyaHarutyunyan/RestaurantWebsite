import { profileReducerTypes, profileTypes } from "./profile.types";

const initialState = {
  email: "",
  fullName: "",
  id: "",
  role: "",

};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileReducerTypes.sign.in:

      return {
        fullName: action.payload.fullName,
        email: action.payload.email,
        id: action.payload.id,
        role: action.payload.role
      }
    case profileReducerTypes.sign.out:
      return {
        fullName: "",
        email: ""
      }

    default:
      return state;
  }
};
