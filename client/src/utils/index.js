import {checkIsPass,checkIsText,checkIsEmail,
  changePass,changeEmail,changeText} from "./authFunctions"


export const change= {
  pass:changePass,
  email:changeEmail,
  text:changeText}
export const check = {
  text:checkIsText,
  email:checkIsEmail,
  pass:checkIsPass
}