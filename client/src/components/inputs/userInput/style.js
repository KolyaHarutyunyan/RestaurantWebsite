import styled from "styled-components";

export const StyledUserInput = styled.div`
  position: relative;
  max-width: 584px;
  width: 100%;
  .user-input-label {
    .input-label {
      margin-bottom: 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #2a374e;
      display: flex;
      &.required::after {
        content: "*";
        color: #ff453a;
      }
    }
    & > input {
      outline: none;
      border: 1px solid #c4c4c4;
      width: 100%;
      padding: 12px 16px;
      border-radius: 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #2a374e;
    }
    & > textarea {
      outline: none;
      resize: none;
      border: 1px solid #c4c4c4;
      max-width: 584px;
      width: 100%;
      height: 118px;
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 8px;
      padding: 10px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #2a374e;
    }
  }
  .user-input-error-text {
    width: 100%;
    padding: 4px 14px;
    min-height: 16px;
    color: #ff453a;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .user-input-char-counter {
    width: 100%;
    margin: 4px 0px 16px;
    color: #c4c4c4;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;
