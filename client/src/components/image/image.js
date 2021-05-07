import { Img, NoImage } from "./style";
import { BsImage } from "react-icons/bs";
export const Image = (props) => {
  /* should be integrated loading functionality */
  if (props.src) {
    return <Img {...props} className={`${props.className || ""} image`} />;
  }
  return (
    <NoImage {...props} className={`${props.className || ""} image no-image`}>
      <BsImage />
    </NoImage>
  );
};
