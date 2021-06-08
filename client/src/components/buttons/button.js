import { ButtonContainer } from "./style";
export const Button = ({
  children,
  fullWidth = false,
  color = "active",
  link = false,
  outlined = false,
  hoverable = true,
  ...rest
}) => {
  return (
    <ButtonContainer
      fullWidth={fullWidth}
      color={color}
      link={link}
      outlined={outlined}
      {...rest}
    >
      {children}
      {hoverable ? <div className="b-fade" /> : null}
    </ButtonContainer>
  );
};
