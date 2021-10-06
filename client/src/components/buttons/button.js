import { Fragment } from "react";
import { ButtonContainer } from "./style";
import PulseLoader from "react-spinners/PulseLoader";
export const Button = ({
  children,
  fullWidth = false,
  color = "active",
  link = false,
  outlined = false,
  hoverable = true,
  square = false,
  maxWidth,minWidth,
  onLoad = false,
                         height,
  ...rest
}) => (
  <ButtonContainer
    style={{height:height, minWidth:minWidth, maxWidth:maxWidth}}
    fullWidth={fullWidth}
    color={color}
    link={link}
    outlined={outlined}
    square={square}
    {...rest}
    disabled={onLoad || rest.disabled}

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
        {hoverable && !link ? <div className="b-fade" /> : null}
      </Fragment>
    )}
  </ButtonContainer>
);
