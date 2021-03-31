import { authActions } from "./auth"
import { profileActions } from "./profile";

export { Store } from './store'

export const actions = {
  auth:authActions,
  profile:profileActions
}