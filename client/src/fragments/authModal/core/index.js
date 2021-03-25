export * as Styled from "./style"

export { useAuthStyles } from "./style"

import { SignIn } from "./screens/signIn"
import { SignUp } from "./screens/signUp"
import { Done } from "./screens/done"
import { GetRestaurant } from "./screens/getRestorant"
import { GetEmail } from './screens/getEmail'
import { Verify } from './screens/verify'
import { ResetPass } from './screens/resetPass'

export const Screens ={
  SignIn,
  SignUp,
  Done,
  GetRestaurant,
  GetEmail,
  Verify,
  ResetPass,
}

export { Title } from "./detals/title"
export { Socials } from "./detals/socials"
export { socialData, VerifyKeyLength } from "./constants"






