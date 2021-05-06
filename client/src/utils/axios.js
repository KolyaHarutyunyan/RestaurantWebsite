import axios from "axios";
import { CONSTANTS } from "@eachbase/constants";
export const initAxiosInterceptors = () => {
  /* 
    configured request interceptor for private/public calls
  */
  axios.interceptors.request.use((config) => {
    config.url = `${CONSTANTS.API_BASE}${config.url}`;
    if (config.auth) {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("token not found");
      }
      config.headers = {
        ...config.headers,
        "access-token": `${token}`,
      };
    }
    return config;
  });

  /* 
    response interceptor also configurable and developer able to 
    mutate data before he will fetch it 
  */
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      localStorage.removeItem("token");
      return error;
    }
  );
};
