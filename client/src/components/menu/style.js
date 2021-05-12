import styled from "styled-components";

export const Container = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  background-color: white;
  box-shadow: -1px 14px 15px 0px #d6d6d6;
  border-radius: 0 0 10px 10px;
  ${({ position: { top, left } }) =>
    `
      top: ${top}px;
      left: ${left}px;
    `}
  width: ${({ width }) => width}px;
`;
