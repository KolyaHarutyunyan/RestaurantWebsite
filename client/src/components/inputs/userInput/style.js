import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const StyledUserInput = styled.div.attrs((props) => ({
  className: props.inputClassName,
}))`
  position: relative;
  max-width: 584px;
  width: 100%;
  margin-bottom: 16px;
  .user-input-label {
    .input-label {
      margin-bottom: 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
      display: flex;
      &.required::after {
        content: "*";
        color: ${colors.primary};
      }
    }
    & > input {
      outline: none;
      border: 1px solid ${colors.lightBlack};
      width: 100%;
      padding: 12px 16px;
      border-radius: 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
    }
    & > textarea {
      outline: none;
      resize: none;
      border: 1px solid ${colors.lightBlack};
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
      color: ${colors.secondary};
    }
  }
  .user-input-error-text {
    width: 100%;
    padding: 4px 14px;
    color: #ff453a;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .user-input-char-counter {
    width: 100%;
    padding-top: 4px;
    color: ${colors.lightBlack};
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;
