import axios from "axios";

export const profileService = {
  signIn: (credentials) => axios.post("/auth/signin", credentials),
  signUp: (data) => axios.post("/owners", data),
  userInfo: () => axios.get("/owners/profile", { auth: true }),
  deleteProfile: () => axios.delete("/user", { auth: true }),
  forgotPassword: (email) => axios.get(`/auth/forgotPassword/${email}`),
  changePassword: (data) =>
    axios.post(`/auth/changePassword`, data, { auth: true }),
  updateProfileInfo: (data) => axios.put("/user", data, { auth: true }),
};
