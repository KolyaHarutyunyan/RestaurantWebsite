import axios from "axios";

export const imageService = {
  uploadImages: (images) => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("image[]", image);
    });

    return axios.post("/images/addMany", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      auth: true,
    });
  },
  uploadImage: (image) => {
    const formData = new FormData();
    formData.append("image", image);
    return axios.post("/images/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      auth: true,
    });
  },
  removeImage: (imageIds) =>
    axios.post("/images/remove", imageIds, { auth: true }),
};
