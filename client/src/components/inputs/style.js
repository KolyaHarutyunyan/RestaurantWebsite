import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledAddressInput = styled.div`
  .search-address-wrapper {
    position: relative;
    cursor: pointer;
    .search-address {
      position: relative;
      font-family: Open Sans, sans-serif;
      gap: 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      outline: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 48px;
      background: ${colors.white} 0% 0% no-repeat padding-box;
      border: 1px solid ${colors.lightBlack};
      border-radius: 8px;
      padding: 0px 18px;
      cursor: pointer;
      color: #545f7e;
      & input {
        font-family: Open Sans, sans-serif;
        font-size: 16px;
        color: ${colors.text};
      }
      &.disabled {
        gap: 14px;
        cursor: no-drop;
      }
      .icon {
        flex: 0 0 22px;
        display: flex;
        align-items: center;
        color: ${colors.text};
        justify-content: center;
      }
      .search-address-input {
        flex: 1;
        border: none;
        outline: 0;
        height: 100%;
        &:disabled {
          cursor: no-drop;
        }
      }
    }
    .search-address-description {
      background: ${colors.white} 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 12px #0052e01a;
      border-radius: 6px;
      position: absolute;
      top: 52px;
      z-index: 9999;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      cursor: default;
      .suggestion-item {
        background-color: ${colors.white};
        &:not(:first-of-type) {
          margin-top: 2px;
        }
        &.active {
          background-color: #fafafa;
        }
        .description-text {
          display: inline-block;
          width: 100%;
          padding: 2px 8px;
          font-size: 16px;
          line-height: 30px;
          color: #545f7e;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover {
            background: #387dff1a 0% 0% no-repeat padding-box;
          }
        }
      }
    }
  }
`;

export const StyledValidationInput = styled.div`
  .sign-in-input {
    .MuiFormControl-root {
      width: 395px;
      margin-top: 20px;
    }
    .MuiFormLabel-root.Mui-error {
      color: #f07379;
      font-weight: 700;
    }
    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${colors.red700};
    }
  }
  .input-text-field {
    width: 100%;
    & .MuiOutlinedInput-root {
      height: 48px;
    }
    &.small .MuiOutlinedInput-root {
      height: 36px;
    }
    & .MuiInputLabel-outlined {
      margin-top: -3px;
    }
    & .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(14px, -2px) scale(0.75);
    }
    & .MuiInputBase-input::placeholder {
      font-size: 14px;
      color: #4b5c6880;
    }
  }
`;

export const InputContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid;
    border-color: ${({ error }) =>
      error ? colors.primary : colors.lightBlack};
    height: 48px;
    border-radius: 8px;
    @media (max-width: 767px) {
      height: 42px;
    }

    .icon-container {
      padding-left: 16px;
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 0 0 30px;
    }
    .input-container {
      display: flex;
      .controller-eye {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      flex: 1;
      height: 100%;

      input {
        padding: 0 8px 0 8px;
        margin: 0;
        height: 100%;
        width: 90%;
        border: none;
        outline: 0;
        font-size: 16px;
        font-family: Open Sans, sans-serif;
        color: ${colors.secondary};
        @media (max-width: 768px) {
          font-size: 14px;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 57px;
    font-size: 0.8rem;
    text-align: left;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;

export const TextareaContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
    border-radius: 8px;
    .icon-container {
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      flex: 0 0 30px;
    }
    .input-container {
      flex: 1;
      textarea {
        font-family: Open Sans, sans-serif;
        padding: 5px 5px 0 5px;
        margin: 0;
        font-size: 16px;
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        outline: 0;
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 57px;
    font-size: 0.8rem;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;

export const SelectContainer = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #2b273c80;
  border-radius: 8px;
  outline: 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 3px;
  label {
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.secondary};
    display: inline-flex;
    align-items: center;
    input {
      display: none;
    }
    .radio-box {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid ${colors.yellowOrange};
      margin-right: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > input:checked + .radio-box::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${colors.yellowOrange};
    }
    em {
      font-style: normal;
      color: ${colors.yellowOrange};
      text-transform: capitalize;
      margin: 0px 4px;
    }
  }
`;
