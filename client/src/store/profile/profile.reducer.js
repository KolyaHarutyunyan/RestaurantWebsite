import { profileReducerTypes, profileTypes } from "./profile.types";

const initialState = {
  email: "fhfd",
  fullName: "dfghdfgh",
  id: "fdghdfg",
  role: "fdghdfghd",

};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileReducerTypes.signIn:

      return {
        fullName: action.payload.fullName,
        email: action.payload.email,
        id: action.payload.id,
        role: action.payload.role
      }
    case profileReducerTypes.signOut:
      return {
        fullName: "",
        email: ""
      }

    default:
      return state;
  }
};
