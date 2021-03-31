import { authTypes } from "./auth.types";

export const authActions = {
  sign:{
    in: payload=>({type:authTypes.sign.in,payload}),
    up: payload=>({type:authTypes.sign.up,payload}),
    out: payload=>({type:authTypes.sign.out,payload:{}}),
  },
  check: {
    Email: payload=>({type:authTypes.check.email,payload}),
    VerifyKey: payload=>({type:authTypes.check.verifyKey,payload}),
    isAuth:payload=>({type:authTypes.check.isAuthed}),
  },
  resetPassword:payload=>({type:authTypes.resetPassword,payload}),
  cleanError:payload=>({type:authTypes.cleanError})
}