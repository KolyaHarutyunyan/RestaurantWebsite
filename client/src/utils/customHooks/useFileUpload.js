import { useEffect, useState } from "react";

export const useFileUpload = (image, images, mainImageIndex) => {
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [imgPush, setImgPush] = useState("");
  const [imgsPush, setImgsPush] = useState([]);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [deletedImg, setDeletedImg] = useState([]);

  const mainImage = imgs[index];

  useEffect(() => {
    if (images && mainImageIndex >= 0) {
      setImgs(images);
      setIndex(mainImageIndex);
    } else {
      setImgs([]);
      setIndex(0);
    }
  }, [images, mainImageIndex]);

  useEffect(() => {
    if (image) {
      setImg(image);
    } else {
      setImg("");
      setImgPush("");
    }
  }, [image]);

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
    if (key >= 0 && item) {
      if (index === key) {
        setIndex(0);
      } else {
        const mainImgIdx = imgs.findIndex((img) => img.id === mainImage?.id);
        setIndex(mainImgIdx);
        console.log(mainImgIdx, "main index");
        console.log(mainImage, "mainImg");
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
    setImgsPush,
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
