import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledSettingsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
  .file-input-box {
    max-width: 584px;
    width: 100%;
    border: 1px dashed #9d9d9d;
    padding: 24px 0px 25px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    .file-input-wrapper {
      max-width: 340px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .restaurant-logo {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        margin-bottom: 16px;
        svg {
          width: 100%;
          object-fit: cover;
        }
      }
      .file-upload-text {
        margin-bottom: 8px;
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.secondary};
        cursor: default;
        .upload-label {
          margin: 0px 6px;
          color: ${colors.yellowOrange};
          cursor: pointer;
          input[type="file"] {
            display: none;
          }
        }
      }
      .supported-file-text {
        max-width: 240px;
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #9d9d9d;
        cursor: default;
      }
    }
  }
  .hours-of-operation-box {
    max-width: 583px;
    width: 100%;
    margin-bottom: 16px;
    .accordion-toggler {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      svg.shown {
        transform: rotate(180deg);
      }
    }
    .weekdays-box {
      width: 100%;
      padding: 24px;
    }
  }
`;

export const StyledSocialAccountsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
`;

export const StyledFormActionsBox = styled.div`
  max-width: 583px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    max-width: 284px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    &.cancel-button {
      background-color: #f5f5f5;
      color: ${colors.secondary};
    }
    &.save-button {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;
