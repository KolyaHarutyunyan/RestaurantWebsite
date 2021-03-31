import Axios from "axios";
import { API_BASE } from "../constants";

export const profileService = {
  remove: body => Axios.post(`${API_BASE}/auth/signup`, body.user)

};
