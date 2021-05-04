import { ItemContainer, ListContainer } from "./style";
import { BsChevronRight } from "react-icons/all";
export const List = ({ children, ...rest }) => (
  <ListContainer {...rest}>{children}</ListContainer>
);

export const Item = ({ children, ...rest }) => (
  <ItemContainer {...rest}>
    {children}
    <div className="icon">
      <BsChevronRight />
    </div>
  </ItemContainer>
);
