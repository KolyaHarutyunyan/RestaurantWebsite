import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const ButtonContainer = styled.button`
  min-width: 200px;
  height: 48px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background-color: ${({ link }) => (link ? "none" : colors.primary)};
  color: ${({ link }) => (link ? colors.text : colors.white)};
  border-radius: 24px;
  font: normal normal 600 14px/19px Arial, Helvetica, sans-serif;
  letter-spacing: 0px;
`;

export const FabContainer = styled.button`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  outline: 0;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px #e2e2e2;
`;
