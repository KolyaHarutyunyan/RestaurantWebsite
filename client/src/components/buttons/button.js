import { ButtonContainer } from "./style";

export const Button = ({
  children,
  fullWidth = false,
  inactive = false,
  actionColor = 0,
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
      actionColor={actionColor}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};
