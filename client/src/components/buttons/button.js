import { ButtonContainer } from "./style";

export const Button = ({
  children,
  fullWidth = false,
  inactive,
  link = false,
  outlined = false,
  ...rest
}) => {
  return (
    <ButtonContainer
      inactive={inactive}
      outlined={outlined}
      link={link}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};
