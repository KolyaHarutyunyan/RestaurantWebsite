import styled from "styled-components";
import { colors } from "@eachbase/theme";

const setBackgroundColor = ({ link, inactive, outlined }) => {
  if (link || outlined) {
    return "transparent";
  }
  if (inactive) {
    return colors.text;
  }

  return colors.primary;
};

const setColor = ({ inactive, outlined, link }) => {
  if ((link || outlined) && inactive) {
    return colors.text;
  }
  if ((link || outlined) && !inactive) {
    return colors.primary;
  }
  return colors.white;
};

const setBorder = ({ outlined, inactive }) => {
  if (outlined && inactive) {
    return `1px solid ${colors.text}`;
  }
  if (outlined && !inactive) {
    return `1px solid ${colors.primary}`;
  }

  return "none";
};

export const ButtonContainer = styled.button`
  min-width: 200px;
  height: 48px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background-color: ${setBackgroundColor};
  color: ${setColor};
  border-radius: 24px;
  font: normal normal 600 14px/19px Arial, Helvetica, sans-serif;
  letter-spacing: 0px;
  border: ${setBorder};
`;

export const FabContainer = styled.button`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  outline: 0;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px #e2e2e2;
`;
