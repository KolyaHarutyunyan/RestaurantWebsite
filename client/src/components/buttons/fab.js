import { FabContainer } from "./style";

export const Fab = ({ size = 50, children, ...rest }) => {
  return (
    <FabContainer size={size} {...rest}>
      {children}
    </FabContainer>
  );
};
