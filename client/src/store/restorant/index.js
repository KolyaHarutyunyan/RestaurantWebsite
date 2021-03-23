export { profileReducer } from './profile.reducer';
export { watchProfile } from './profile.saga';

import {  updateAvatar,editProfile} from "./profile.actions"
export const profileActions ={ updateAvatar,editProfile}