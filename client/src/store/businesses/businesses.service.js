import axios from "axios";

export const businessesService = {
  getMyBusiness: () => axios.get(`/businesses/mybusiness`, { auth: true }),
  getBusinessesByOwnerId: (ownerId) =>
    axios.get(`/businesses/owner/${ownerId}`, { auth: true }),
  editBusiness: (business) =>
    axios.put(`/business/${business._id}`, { data: { ...business } }),
  deleteBusiness: (restaurantId) => axios.put(`/business/${restaurantId}`),
  createBusiness: (restaurantData) =>
    axios.post(`/businesses`, restaurantData, { auth: true }),
  addBusinessImage: (file) =>
    axios.post(`/business/image`, file, { auth: true, headers: {} }),
};
