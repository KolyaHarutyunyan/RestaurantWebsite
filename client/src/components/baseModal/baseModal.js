import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Styled } from "./style";
import { useEffect, useState } from "react";

export const BaseModal = ({ children, status, close, type }) => {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if (status) setModalStatus(status);
    else setTimeout(() => setModalStatus(status), 499);
  }, [status]);

  const selfClose = () => {
    setModalStatus(false);
    setTimeout(close, 500);
  };

  if (status) {
    return (
      <Styled.Dialog open={modalStatus || false} type={type}>
        <div className="bg" onClick={selfClose} />
        <div className="container">
          <IconButton aria-label="close" className="close" onClick={selfClose}>
            <CloseIcon />
          </IconButton>
          {children}
        </div>
      </Styled.Dialog>
    );
  }
  return null;
};
