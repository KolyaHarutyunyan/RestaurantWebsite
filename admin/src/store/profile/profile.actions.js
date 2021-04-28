import { profileTypes } from ".";

export const profileActions = {
  signIn: (payload) => ({ type: profileTypes.signIn, payload }),
  signOut: () => ({ type: profileTypes.signOut }),
  remove: (payload) => ({ type: profileTypes.remove, payload }),
};
