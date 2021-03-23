export { Store } from './store';
export { API_BASE } from './constants';

/** Profile Actions */
import { updateAvatar, setUser, editProfile } from './profile';
export const profileActions = {
    updateAvatar,
    editProfile,
    setUser,
};

import {signIn, signOut, signUp } from './auth'
export const authActions = {
    signIn, signOut, signUp 
}