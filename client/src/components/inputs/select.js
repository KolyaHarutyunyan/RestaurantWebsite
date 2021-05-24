import { SelectContainer } from "./style";

export const Select = ({ children, ...rest }) => {
  return <SelectContainer {...rest}>{children}</SelectContainer>;
};
