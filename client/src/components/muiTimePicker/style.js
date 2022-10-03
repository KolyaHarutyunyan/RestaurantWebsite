import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMuiTimePicker = styled.div.attrs((props) => ({
  className: props.className,
}))`
  max-width: 535px;
  width: 100%;
  padding: 16px;
  margin: 6px auto;
  background-color: ${colors.white};
  border: 1px solid #f5f7f9;
  border-radius: 8px;
  &.closed {
    opacity: 0.7;
  }
  .mui-time-picker-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
      margin-top: 8px;
    }
    .mui-time-picker-for {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
      margin-top: 4px;
      margin-right: 8px;
      align-self: flex-start;
    }
    .mui-time-picker-box {
      display: flex;
      justify-content: initial;
      align-items: center;
      .mui-time-picker {
        .MuiInputBase-root {
          max-width: 146px;
          width: 100%;
          height: 36px;
          input.MuiInputBase-input {
            padding: 8px 16px;
            font-family: Open Sans, sans-serif;
            font-weight: 400;
            font-size: 14px;
            color: ${colors.secondary};
          }
        }
      }
      .mui-time-picker-dash {
        width: 6px;
        height: 1px;
        background-color: ${colors.halfBlack};
        margin: 0px 16px;
      }
    }
    .mui-time-picker-closing-label {
      display: flex;
      align-items: center;
      margin-right: 14px;
      margin-left: 18px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.secondary};
      cursor: pointer;
      input[type="checkbox"] {
        display: none;
      }
      .mui-time-picker-checkbox {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
        border: 1px solid ${colors.yellowOrange};
        border-radius: 4px;
        svg {
          display: none;
        }
      }
      & > input:checked + .mui-time-picker-checkbox {
        background-color: ${colors.yellowOrange};
        svg {
          display: unset;
        }
      }
    }
    .mui-time-picker-delete-icon {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffecef;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .add-more-hours-btn {
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.yellowOrange};
    margin-top: 11px;
    margin-left: 49px;
  }
`;
