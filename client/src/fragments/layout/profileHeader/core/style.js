import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledAccountSettings = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: inherit;
  @media (max-width: 767px) {
    padding: 32px 16px;
  }
  .close-account-settings-button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 8px;
    right: 8px;
    background-color: ${colors.black50};
    border-radius: 32px;
  }
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
  .account-box {
    width: 100%;
  }
  .sign-out-button {
    svg {
      margin-right: 8px;
    }
  }
`;
