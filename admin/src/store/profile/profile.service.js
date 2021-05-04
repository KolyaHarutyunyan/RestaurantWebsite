import Axios from "axios";
import { CONSTANTS } from "@eachbase/constants";

export const profileService = {
  remove: (body) => Axios.post(`${CONSTANTS.API_BASE}/auth/signup`, body.user),
};
