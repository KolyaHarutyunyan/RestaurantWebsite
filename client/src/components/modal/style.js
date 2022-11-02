import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: ${({ isOpen }) => (isOpen ? "9999" : "-9999")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
    .close-modal-button {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      background: ${colors.black50};
      border-radius: 32px;
    }
    .head {
      display: flex;
      justify-content: flex-end;
      &.back {
        justify-content: flex-start;
      }
      button {
        position: absolute;
        top: 16px;
        right: 16px;
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
    padding: ${({ mini, modal }) =>
      mini ? "10px 30px 30px 30px" : modal ? "32px" : "15px 30px 30px 30px"};

    @media only screen and (max-width: 767px) {
      max-width: 343px;
      padding: 24px 16px;
    }
    border-radius: ${({ mini, border }) => (mini || border ? "8px" : "32px")};
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
  .close-button {
    @media (min-width: 320px) {
      //margin-right: -8px;
    }
    @media (min-width: 767px) {
      //margin-right: -8px;
    }
    @media (min-width: 1279px) {
      //margin-right: -23px;
    }
    @media (min-width: 1920px) {
      //margin-right: -39px;
    }
  }

  .close-button-border {
    //margin-top: 8px;
    margin-left: 0px;
    @media (min-width: 320px) {
      //margin-right: 0;
    }
    @media (min-width: 767px) {
      //margin-right: -15px;
    }
    @media (min-width: 1279px) {
      //margin-right: -15px;
    }
    @media (min-width: 1920px) {
      //margin-right: -30px;
    }
  }

  .back-button-border {
    //margin-top: 8px;
    margin-left: 0;

    @media (min-width: 320px) {
    }
    @media (min-width: 767px) {
      //margin-left: -15px;
    }
    @media (min-width: 1279px) {
      //margin-left: -15px;
    }
    @media (min-width: 1920px) {
      //margin-left: -30px;
    }
  }
`;
