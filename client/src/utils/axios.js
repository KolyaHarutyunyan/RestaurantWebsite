import axios from "axios";
import router from "next/router";
import { API_BASE } from "@eachbase/constants";

const path =typeof window !== 'undefined' && window.location.pathname
export const initAxiosInterceptors = () => {

  axios.interceptors.request.use((config) => {
    config.url = `${API_BASE}${config.url}`;
    if (config.auth) {
      const token = localStorage.getItem("token");
      if (!token) {
        if(path !== '/privacyPolicy' && path !==  '/termsAndConditions' && path.length > 150) {
          router.push("/");
          throw new Error("token not found");
        }
      }
      config.headers = {
        ...config.headers,
        "access-token": `${token}`,
      };
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        //NOW
        if(path !== '/privacyPolicy' &&  path !==  '/termsAndConditions' && path.length > 150) {
          router.push("/");
        }
      }
      throw new Object({
        data: error.response.data,
        status: error.response.status,
      });
    }
  );
};
