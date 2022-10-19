import { useEffect, useState } from "react";

export const useFileUpload = (images = [], mainImageIndex = 0) => {
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [imgPush, setImgPush] = useState("");
  const [imgsPush, setImgsPush] = useState([]);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [deletedImg, setDeletedImg] = useState([]);

  useEffect(() => {
    setImgs(images);
    setIndex(mainImageIndex);
  }, [images, mainImageIndex]);

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
    const newArr = [...imgs];
    const imageArr = [...imgsPush];
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
    if (key && item) {
      if (index === key) {
        setIndex(0);
      }
      const deletedImages = [...imgsPush];
      deletedImages.splice(key, 1);
      setImgsPush(deletedImages);
      const deletedImagesFile = [...imgs];
      deletedImagesFile.splice(key, 1);
      setImgs(deletedImagesFile);
      const newArr = [...deletedImg, item];
      setDeletedImg(newArr);
    } else {
      setImgs([]);
      setImgsPush([]);
    }
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
