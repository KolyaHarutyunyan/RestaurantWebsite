import React from "react";
import { CircularProgress } from "@mui/material";
import { StyledMyButton } from "./style";

export const MyButton = ({
  buttonClassName,
  buttonType,
  buttonDisabled,
  onClickButton,
  buttonLoader = false,
  children,
}) => {
  return (
    <StyledMyButton
      type={buttonType}
      className={buttonClassName}
      disabled={buttonDisabled}
      onClick={onClickButton}
    >
      {buttonLoader ? (
        <CircularProgress size={17} color={"inherit"} />
      ) : (
        children
      )}
    </StyledMyButton>
  );
};
