import axios from "axios";

export const profileService = {
  signIn: (credentials) =>
    axios.post("/auth/signin", { ...credentials, auth: true }),
};
