import { Img, NoImage } from "./style";
import { BsImage } from "react-icons/bs";
import { useEffect, useState } from "react";

export const Image = (props) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    if (props.src) {
      const img = document.createElement("img");
      img.src = props.src;
      const handler = () => {
        setImageLoaded(true);
        img.remove();
      };
      img.onload = () => handler();
      img.onerror = () => handler();
    }
  }, [props.src]);

  if (props.src && imageLoaded) {
    return <Img {...props} className={`${props.className || ""} image`} />;
  }

  return (
    <NoImage {...props} className={`${props.className || ""} image no-image`}>
      <BsImage />
    </NoImage>
  );
};
