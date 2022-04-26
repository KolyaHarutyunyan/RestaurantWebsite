import axios from "axios";

export const businessesService = {
  getMyBusiness: () => axios.get(`/businesses/mybusiness`, { auth: true }),
  getBusinessById: (id) => axios.get(`/businesses/${id}`, { auth: true }),
  getBusinessesByOwnerId: (ownerId) => axios.get(`/businesses/owner/${ownerId}`, { auth: true }),
  editBusiness: (business) => axios.patch(`/businesses/${business.id}`, business , { auth: true }),
  deleteBusiness: (restaurantId) => axios.put(`/business/${restaurantId}`),
  createBusiness: (restaurantData) => axios.post(`/businesses`, restaurantData, { auth: true }),
  addBusinessImage: (file) => axios.post(`/business/image`, file, { auth: true, headers: {} }),
};
