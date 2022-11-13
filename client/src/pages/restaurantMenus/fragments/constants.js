import moment from "moment";

export const formatDate = (date = new Date()) => moment(date).format("ll");
