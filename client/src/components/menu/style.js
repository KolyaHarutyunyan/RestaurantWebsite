import styled from "styled-components";

export const Container = styled.div`
  z-index: ${({ open }) => (open ? "1000" : "-10000")};
  transition: visibility 1s ease-in-out, opacity 0.2s ease-in-out;
  visibility: ${({ open }) => (open ? "visible" : "none")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    position: fixed;
    z-index: 1000;
    background-color: white;
    box-shadow:  0px 0px 6px #0000001A;
    border-radius: 6px;
    ${({ position: { top, left } }) =>
      `
      top: ${top}px;
      left: ${left}px;
    `}
    width: ${({ width }) => width}px;
  }
  .blur {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
