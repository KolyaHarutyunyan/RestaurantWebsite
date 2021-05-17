import axios from "axios";

export const profileService = {
  signIn: (credentials) => axios.post("/auth/signin", credentials),
  signUp: (data) => axios.post("/auth/signup", data),
  userInfo: () => axios.get("/auth/userInformation", { auth: true }),
  forgotPassword: (email) => axios.get(`/auth/forgotPassword/${email}`),
  changePassword: (data) =>
    axios.post(`/auth/changePassword`, data, { auth: true }),
};
