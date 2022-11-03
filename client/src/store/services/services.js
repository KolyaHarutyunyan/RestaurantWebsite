import axios from "axios";

export const services = {
  contactUs: (data) => axios.post("", data),

  activateStarter: (data) => axios.post("", data),
};
