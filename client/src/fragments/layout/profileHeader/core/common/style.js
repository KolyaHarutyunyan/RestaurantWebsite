import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledNameEmailForm = styled.div`
  .name-email-actions-wrapper {
    width: 100%;
    padding: 0px 19px;
    .account-save-cancel-btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 9px;
      button {
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 14px;
        &.edit-button {
          color: ${colors.primary};
        }
        &.cancel-button {
          color: ${colors.gray};
          margin-left: 14px;
        }
      }
    }
  }
`;

export const StyledChangePasswordForm = styled.div`
  .change-password {
    max-width: 347px;
    width: 100%;
    background-color: ${colors.white};
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
    @media (max-width: 610px) {
      max-width: 100%;
    }
    .change-password-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      .change-password-text {
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.secondary};
      }
      .account-save-cancel-btns {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 9px;
        button {
          font-family: Open Sans, sans-serif;
          font-weight: 700;
          font-size: 14px;
          &.edit-button {
            color: ${colors.primary};
          }
          &.cancel-button {
            color: ${colors.gray};
            margin-left: 14px;
          }
        }
      }
    }
    .use-strong-password {
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.halfBlack};
    }
    .password-inputs-box {
      width: 100%;
      margin-top: 16px;
      & > div:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;
