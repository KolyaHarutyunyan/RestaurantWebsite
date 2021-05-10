import { ButtonContainer } from "./style";

export const Button = ({ children, fullWidth = false, ...rest }) => {
  return (
    <ButtonContainer fullWidth={fullWidth} {...rest}>
      {children}
    </ButtonContainer>
  );
};
