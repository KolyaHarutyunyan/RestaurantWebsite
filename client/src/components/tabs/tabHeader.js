import { HeaderContainer } from "./style";

export const TabHeader = ({ children, square = false }) => {
  return <HeaderContainer square={square}>{children}</HeaderContainer>;
};
