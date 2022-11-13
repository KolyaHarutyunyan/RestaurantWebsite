import axios from "axios";

export const services = {
  contactUs: (data) => axios.post("/mailer/contactUs", data),

  activateStarter: (data) => axios.post("", data),
};
