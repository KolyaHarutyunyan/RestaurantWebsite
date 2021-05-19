import styled from "styled-components";

const colors = {
  active: "#FF453A",
  default: "#2B273C1A",
  action: "#007AFF",
};

export const ButtonContainer = styled.button`
  min-width: ${({ link }) => (link ? "fit-content" : "160px")};
  height: 44px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: 24px;
  border: 1px solid;
  font: normal normal 600 14px/19px Arial, Helvetica, sans-serif;
  ${({ color, link, outlined }) => {
    if (link) {
      return `
        background-color: transparent;
        border-color: transparent;
        color: ${color === "default" ? "#2B273C" : colors[color]};
      `;
    }

    if (outlined) {
      return `
        border-color: ${color === "default" ? "#2B273C" : colors[color]};
        color: ${color === "default" ? "#2B273C" : colors[color]};
        background-color: transparent;
      `;
    }

    return `
        border-color: transparent;
        color: ${color === "default" ? "#2B273C" : "white"};
        background-color: ${colors[color]};
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
