import { CommonButtonContainer } from "./style";

export const Common = ({ children, ...rest }) => {
  return <CommonButtonContainer {...rest}>{children}</CommonButtonContainer>;
};
