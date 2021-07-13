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
        padding: 5px;
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
    width: ${({ mini }) => (mini ? "395" : "548")}px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 92vh;
    padding: ${({ mini }) => (mini ? "10px 30px 30px 30px" : "30px")};
    
    @media only screen and (max-width: 768px) {
      width: 340px;
    }
    @media (min-width: 320px) {
      padding: 16px 16px 32px 16px;
    }
    @media (min-width: 768px) {
      padding: 32px 32px 42px 32px;
    }
    @media (min-width: 1280px) {
      padding: 32px 32px 42px 32px;
    } 
    @media (min-width: 1920px) {
      padding: 48px;
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
