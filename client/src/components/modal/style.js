import styled from "styled-components";
export const ModalContainer = styled.div`
  z-index: ${({ isOpen }) => (isOpen ? "9999" : "-9999")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
    .head {
      display: flex;
      justify-content: flex-end;
      &.back {
        justify-content: flex-start;
      }
      button {
        outline: 0;
        line-height: 10px;
        padding: 3px;
        border-radius: 50%;
        font-size: 20px;
        background: #2b273c1a 0% 0% no-repeat padding-box;
      }
    }
    .content {
      flex: 3;
      overflow: auto;
    }
    position: fixed;
    z-index: 10001;
    width: ${({ mini }) => (mini ? "395" : "465")}px;
    left: calc(50% - (${({ mini }) => (mini ? "395" : "465")}px / 2));
    top: 5vh;
    max-height: 92vh;
    padding: ${({ mini }) => (mini ? "10px 30px 30px 30px" : "30px")};
    @media only screen and (max-width: 768px) {
      padding: 15px;
      width: 340px;
      left: calc(50% - (340px / 2));
    }
    border-radius: ${({ mini }) => (mini ? "8px" : "32px")};
    opacity: 1;
    background-color: white;
  }
  .fade {
    opacity: ${({ isOpen }) => (isOpen ? "0.5" : "0")};
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
  }
`;
