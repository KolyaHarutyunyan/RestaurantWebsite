import Axios from "axios";
import { API_BASE } from "../constants";

export const authService = {
  signUp: (body) => Axios.post(`${API_BASE}/auth/signup`, body.user),

  signIn: (body) => Axios.post(`${API_BASE}/auth/signin`, body.user),

  signOut: (body) => Axios.post(`${API_BASE}/auth/signout`, body.user),

  checkEmail: (body) => Axios.post(`${API_BASE}/auth/checkEmail`, body.user),

  checkVerifyKey: (body) =>
    Axios.post(`${API_BASE}/auth/checkEmail`, body.user),

  resetPassword: (body) => Axios.post(`${API_BASE}/auth/checkEmail`, body.user),
};
