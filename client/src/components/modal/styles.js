import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledAvailabilitySchedule = styled.div`
  max-width: 535px;
  width: 100%;
  margin: 6px auto;
  .scrollable {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    // @media (min-width: 320px) {
    //     grid-template-columns: 1fr;
    // }
    // @media (min-width: 1240px) {
    //     grid-template-columns: 1fr 1fr;
    // }
  }
  .available-schedule-title {
    font-size: 32px;
    color: #4b5c68;
    font-weight: bold;
    line-height: 48px;
    margin-bottom: 20px;
  }
  .close-btn {
    position: absolute;
    right: 3px;
    top: 11px;
  }
  .time-row {
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    border: 1px solid #f5f7f9;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    width: 100%;
    margin: 0px auto;
    &:not(:first-of-type) {
      margin-top: 6px;
    }
    // @media (min-width: 320px) {
    //   flex-direction: column;
    // }
    // @media (min-width: 768px) {
    //   flex-direction: row;
    // }
  }
  .remove-icon {
    width: 30px;
  }
  .time-row-wrapper {
    display: flex;
    @media (min-width: 320px) {
      margin-top: 16px;
    }
    @media (min-width: 768px) {
      margin-top: 0px;
    }
  }
  .day-name {
    font-family: Open Sans, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};
    margin-right: 8px;
    align-self: flex-start;
    text-transform: uppercase;
  }
  .add-time {
    cursor: pointer;
    min-width: 90px;
    & span {
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.yellowOrange};
    }
  }
  .times {
    width: 100%;
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
      margin-top: 8px;
    }
    &.closed {
      opacity: 0.7;
    }
    .MuiFormControl-root {
      width: 100%;
      margin-top: 0px;
      border: 1px solid #7b7b7b;
      border-radius: 4px;
      & input {
        width: 100%;
        padding: 8px 16px;
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: ${colors.secondary};
      }
    }
  }
  .more-hours-btn {
    display: inline-block;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.yellowOrange};
    margin-top: 11px;
    cursor: pointer;
  }
  .time-input-style {
    border: 0.5px solid #bebebe;
    border-radius: 8px;
    padding: 1px 5px;
    max-width: 145px;
    width: 100%;
    & .MuiInputBase-root::before {
      content: revert !important;
    }
    & .MuiInputBase-root::after {
      content: revert !important;
    }
    & .Mui-disabled {
      color: #4b5c6880;
    }
  }
  .small-line {
    width: 6px;
    height: 1px;
    background-color: ${colors.halfBlack};
    margin: 0px 16px;
  }
  .custom-checkbox {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    border-radius: 4px;
    color: ${colors.yellowOrange};
    /* &.Mui-checked {
      background-color: ${colors.white} !important;
    } */
  }
  .not-available-text {
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.secondary};
    cursor: default;
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: block;
    }
  }
  .info-modal-wrapper {
    width: 645px;
    padding: 32px;
    border-radius: 8px;
    background-color: white;
    position: relative;
  }
  .remove-time-btn {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffecef;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
  .remove-time-btn-mobile {
    color: #fe7070;
    cursor: pointer;
    margin: 1px 2px 0px 4px;
    @media (min-width: 320px) {
      display: block;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  .close-checkbox {
    display: flex;
    align-items: center;
    margin-right: 14px;
    margin-left: 18px;
    @media (min-width: 320px) {
      margin-bottom: 5px;
    }
    @media (min-width: 768px) {
      margin-top: 0px;
      position: relative;
      right: 0px;
      margin-bottom: 0px;
    }
  }
`;
