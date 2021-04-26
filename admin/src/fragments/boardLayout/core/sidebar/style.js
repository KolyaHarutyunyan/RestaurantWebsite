import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 60px;
  z-index: 2;
  height: calc(100vh - 50px);
  width: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "170px" : "60px")};
  transition: width 0.3s;
  background-color: var(--filling);
  color: var(--light-text);
  .menu {
    margin-top: 120px;
    margin-left: 15px;
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        font-size: 32px;
      }
      .title {
        margin-left: 12px;
        font-size: 16px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .toggle-button {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 30px;
    width: 40px;
    height: 40px;
    background-color: white;
    border: 8px solid white;
    border-radius: 6px;
    transform: rotate(135deg);
    button {
      cursor: pointer;
      padding: 0;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      border: none;
      background-color: var(--filling);
      transition: transform 0.3s;
      transform: rotate(
        ${({ sideBarIsOpen }) => (sideBarIsOpen ? "180deg" : "0")}
      );
      svg {
        translate: transform 0.3s;
        color: white;
        transform: rotate(45deg) scale(2) translateY(0.6px);
      }
    }
  }
`;
