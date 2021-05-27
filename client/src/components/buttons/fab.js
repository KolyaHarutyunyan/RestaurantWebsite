import { FabContainer } from "./style";

export const Fab = ({ size = 40, children, ...rest }) => {
  return (
    <FabContainer size={size} {...rest}>
      {children}
    </FabContainer>
  );
};
