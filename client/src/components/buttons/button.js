import { ButtonContainer } from "./style";
import PulseLoader from "react-spinners/PulseLoader";
export const Button = ({
  children,
  fullWidth = false,
  color = "active",
  link = false,
  outlined = false,
  hoverable = true,
  onLoad = true,
  ...rest
}) => (
  <ButtonContainer
    fullWidth={fullWidth}
    color={color}
    link={link}
    outlined={outlined}
    {...rest}
    disabled={onLoad}
  >
    {onLoad ? (
      <div className="loader-wrapper">
        <PulseLoader
          className="loader"
          color={color === "active" ? "white" : "black"}
        />
      </div>
    ) : (
      <Fragment>
        {children}
        {hoverable ? <div className="b-fade" /> : null}
      </Fragment>
    )}
  </ButtonContainer>
);
