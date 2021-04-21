import styled from "styled-components";

export const Style = {
  Container: styled.div`
    position: fixed;
    top: 60px;
    z-index: 2;
    height: calc(100vh - 50px);
    width: ${({ isOpen }) => (isOpen ? "170px" : "60px")};
    transition: width 0.3s;
    background-color: var(--filling);
  `,
  Menu: {
    Wrapper: styled.ul`
      margin-top: 120px;
      margin-left: 15px;
    `,
    Item: {
      Wrapper: styled.li`
        cursor: pointer;
        display: flex;
        align-items: center;
      `,
      Logo: styled.div`
        display: flex;
        align-items: center;
        font-size: 32px;
      `,
      Title: styled.div`
        margin-left: 12px;
        font-size: 16px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
      `,
    },
  },
  ToggleButton: {
    Wrapper: styled.div`
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
    `,
    Button: styled.button`
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
    `,
  },
};
