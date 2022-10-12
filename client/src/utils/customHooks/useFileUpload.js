import { useState } from "react";

export const useFileUpload = () => {
  const [img, setImg] = useState("");
  const [imgPush, setImgPush] = useState("");
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    for (let item of e) {
      if (item && item.size > 2097152) {
        setError(true);
      } else {
        setError("");
        setImg({
          url: URL.createObjectURL(
            new File([item], "image", { type: "text/json;charset=utf-8" })
          ),
          id: 1,
        });
        setImgPush(new File([item], `img1`));
      }
    }
  };

  const handleFileRemove = () => {
    setImg("");
    setImgPush("");
  };

  return {
    img,
    imgPush,
    error,
    handleFileChange,
    handleFileRemove,
  };
};
