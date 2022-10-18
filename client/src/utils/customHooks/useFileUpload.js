import { useState } from "react";

export const useFileUpload = () => {
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [imgPush, setImgPush] = useState("");
  const [imgsPush, setImgsPush] = useState([]);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [deletedImg, setDeletedImg] = useState([]);

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

  const handleFilesChange = (e) => {
    const newArr = [...img];
    const imageArr = [...imgPush];
    for (let item of e) {
      if (item && item.size > 2097152) {
        setError(true);
      } else {
        setError("");
        newArr.push({
          url: URL.createObjectURL(
            new File([item], "image", { type: "text/json;charset=utf-8" })
          ),
          id: newArr.length + 1,
        });
        setImgs(newArr);
        imageArr.push(new File([item], `img${newArr.length + 1}`));
        setImgsPush(imageArr);
      }
    }
  };

  const handleFileRemove = () => {
    setImg("");
    setImgPush("");
  };

  const handleFilesRemove = (key, item) => {
    setIndex(0);
    const deletedImages = [...imgsPush];
    deletedImages.splice(key, 1);
    setImgsPush(deletedImages);
    const deletedImagesFile = [...imgs];
    deletedImagesFile.splice(key, 1);
    setImgs(deletedImagesFile);
    const newArr = [...deletedImg, item];
    setDeletedImg(newArr);
  };

  const handlePreviewClick = (e) => setIndex(e);

  return {
    img,
    imgs,
    imgPush,
    imgsPush,
    deletedImg,
    error,
    index,
    handleFileChange,
    handleFilesChange,
    handleFileRemove,
    handleFilesRemove,
    handlePreviewClick,
  };
};
