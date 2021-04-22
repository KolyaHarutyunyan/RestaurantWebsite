import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 180px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity, 0.3s ease-in-out, transform 0.4s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? "0px" : "360px")});
  z-index: 1000;
  right: 10px;
  width: 350px;
  height: calc(100vh - 200px);
  background-color: white;
  border: 1px solid var(--filling-third);
  padding: 5px;
  border-radius: 3px;
  overflow: hidden;
  .header {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: none;
      width: 30px;
      height: 30px;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`;
