import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledRestaurantMenus = styled.section`
  cursor: default;
  .menu-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    .menu-title {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      color: ${colors.secondary};
    }
    .add-menu-button {
      padding: 12px 48px;
      background-color: ${colors.primary};
      border-radius: 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.white};
    }
  }
  .menus-list-box {
    width: 100%;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(373px, 1fr));
    .menu-item-card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 16px;
      isolation: isolate;
      background-color: ${colors.white};
      border-radius: 8px;
      & > div {
        &:not(:first-of-type) {
          margin-top: 8px;
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 6px;
        border-radius: 8px 0px 0px 8px;
        background-color: ${colors.lightBlack};
      }
      &.active::before {
        background-color: ${colors.lightGreen};
      }
      .menu-icon-box {
        width: 32px;
        height: 32px;
        background: ${colors.active};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          path {
            fill: ${colors.primary};
          }
        }
      }
      .menu-name-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu-name {
          font-family: Open Sans, sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: ${colors.secondary};
          overflow: hidden;
          max-height: 28px;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 253px;
        }
      }
      .menu-about-box {
        width: 100%;
        .menu-about-text {
          font-family: Open Sans, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: ${colors.secondary};
        }
      }
      .menu-extra-info-box {
        width: 100%;
        .menu-extra-info-text {
          font-family: Open Sans, sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: ${colors.halfBlack};
        }
      }
      .menu-more-and-settings-box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid ${colors.lightGray};
        .menu-more-dropdown {
          position: relative;
          padding: 4px 0px;
          &:hover .menu-more-dropdown-content {
            display: flex;
          }
          .menu-more-icon-button {
            width: 24px;
            height: 24px;
          }
          .menu-more-dropdown-content {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            padding: 4px 0px;
            position: absolute;
            min-width: 119px;
            width: 100%;
            top: 28px;
            right: 0;
            background-color: ${colors.white};
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            button {
              width: 100%;
              justify-content: flex-start;
              align-items: flex-start;
              padding: 9px 24px;
              background-color: inherit;
              font-family: Open Sans, sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: ${colors.secondary};
              &.danger {
                color: ${colors.primary};
              }
              &:hover {
                background-color: ${colors.lightGray};
              }
            }
          }
        }
        .menu-settings-icon-button {
          width: 24px;
          height: 24px;
          margin-left: 8px;
        }
      }
    }
  }
`;
