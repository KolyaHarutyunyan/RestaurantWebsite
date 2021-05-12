import styled from "styled-components";
export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
  .container {
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
    position: fixed;
    z-index: 10001;
    width: 464px;
    left: calc(50% - (464px / 2));
    top: 10vh;
    max-height: 85vh;
    padding: 30px;
    @media only screen and (max-width: 768px) {
      padding: 15px;
      width: 340px;
      left: calc(50% - (340px / 2));
    }
    border-radius: 32px;
    opacity: 1;
    background-color: white;
  }
`;
