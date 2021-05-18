import { ButtonContainer } from "./style";

export const Button = ({
  children,
  fullWidth = false,
  inactive = false,
  colorVariant = "action",
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
      colorVariant={colorVariant}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};
