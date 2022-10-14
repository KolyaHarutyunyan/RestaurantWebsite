import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledAccountSettings = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: inherit;
  .name-and-avatar {
    width: 100%;
    margin-bottom: 19px;
    .name {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: ${colors.secondary};
      text-align: center;
    }
    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      .avatar-wrapper {
        position: relative;
        .profile-photo {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .add-photo {
          position: absolute;
          bottom: -2px;
          left: 100%;
          transform: translateX(-40%);
          cursor: pointer;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          overflow: hidden;
          input[type="file"] {
            display: none;
          }
          svg {
            position: absolute;
            top: -6px;
            left: -6px;
          }
        }
      }
    }
  }
  .account-form {
    width: 100%;
    .edit-wrapper {
      width: 100%;
      padding: 0px 19px;
      .edit-and-save-button {
        width: 28px;
        height: 20px;
        margin: 0px 0px 9px auto;
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: ${colors.primary};
      }
    }
    .change-password {
      width: 100%;
      max-width: 347px;
      width: 100%;
      background-color: ${colors.white};
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
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
        .edit-and-save-button {
          width: 28px;
          height: 20px;
          margin: 0px 0px 9px auto;
          font-family: Open Sans, sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: ${colors.primary};
        }
      }
      .use-strong-password {
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: ${colors.halfBlack};
      }
    }
  }
  .sign-out-button {
    svg {
      margin-right: 8px;
    }
  }
`;
