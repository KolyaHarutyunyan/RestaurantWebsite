import Axios from "axios";

export const authService = {
  signUp: (body) => Axios.post(`${Axios.API_BASE}/auth/signup`, body.user),

  signIn: (body) => Axios.post(`${Axios.API_BASE}/auth/signin`, body.user),

  signOut: (body) => Axios.post(`${Axios.API_BASE}/auth/signout`, body.user),

  checkEmail: (body) =>
    Axios.post(`${Axios.API_BASE}/auth/checkEmail`, body.user),

  checkVerifyKey: (body) =>
    Axios.post(`${Axios.API_BASE}/auth/checkEmail`, body.user),

  resetPassword: (body) =>
    Axios.post(`${Axios.API_BASE}/auth/checkEmail`, body.user),
};
