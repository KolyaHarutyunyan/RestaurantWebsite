import styled from "styled-components";
import { colors } from "@eachbase/theme";

const buttonColors = {
  active: "#FF453A",
  default: "#2B273C1A",
  action: "#007AFF",
};
export const EditSave = styled.div`
  margin-bottom: -2px;
  .classes-close-button {
    color: rgba(28, 26, 38, 0.6);
    margin-right: 16px;
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.button`
  position: relative;
  min-width: ${({ link }) => (link ? "fit-content" : "150px")};
  height: 48px;
  padding: 0 16px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: ${({ square }) => (square ? "8px" : "24px")};
  border: 1px solid;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  line-height: 19px;
  font-size: 16px;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:disabled {
    opacity: 0.6;
  }
  .loader-wrapper {
    position: relative;
    top: 3px;
  }
  .b-fade {
    font-family: Open Sans, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ square }) => (square ? "8px" : "24px")};
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #0000002a;
    }
  }
  ${({ color, link, outlined }) => {
    if (link) {
      return `
        background-color: transparent;
        border-color: transparent;
        color: ${color === "default" ? "#2B273C" : buttonColors[color]};
      `;
    }
    if (outlined) {
      return `
        border-color: ${color === "default" ? "#2B273C" : buttonColors[color]};
        color: ${color === "default" ? "#2B273C" : buttonColors[color]};
        background-color: transparent;
      `;
    }
    return `
        border-color: transparent;
        color: ${color === "default" ? "#2B273C" : "white"};
        background-color: ${buttonColors[color]};
    `;
  }}
`;

export const FabContainer = styled.button`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  outline: 0;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px #e2e2e2;
`;

export const StyledSaveOrCancelButton = styled.div.attrs((props) => ({
  className: props.className,
}))`
  max-width: 583px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
  button {
    max-width: 284px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    &.cancel-button {
      background-color: #f5f5f5;
      color: ${colors.secondary};
    }
    &.save-button {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
    @media (max-width: 1024px) {
      max-width: 276px;
    }
  }
`;
