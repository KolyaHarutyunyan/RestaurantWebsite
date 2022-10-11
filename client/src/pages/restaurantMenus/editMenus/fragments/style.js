import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledEditMenus = styled.div`
  cursor: default;
  .edit-menus-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .preview-button {
      padding: 12px 57px;
      border-radius: 8px;
      background-color: ${colors.primary};
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: ${colors.red700};
      }
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: ${colors.white};
    }
  }
  .edit-menus-nav {
    position: relative;
    /* border: 1px solid; */
    width: 100%;
    .edit-menus-tabs {
      .tabs-wrapper {
        margin-bottom: 16px;
        max-width: 302px;
        background-color: ${colors.white};
        border-radius: 8px;
        padding: 0px;
        .tab {
          max-width: 139px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px;
          font-family: Open Sans, sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          background-color: inherit;
          border-radius: 8px;
          border: 4px solid ${colors.white};
          color: ${colors.secondary};
          text-transform: capitalize;
          &:not(:last-of-type) {
            margin-right: 24px;
          }
          &.Mui-selected {
            background-color: ${colors.yellowOrange};
            color: ${colors.neautralLightGray};
          }
        }
        span.MuiTabs-indicator {
          height: 0px;
        }
      }
      .tab-panels-wrapper {
        .MuiBox-root {
          background-color: inherit;
        }
      }
    }
    .add-menu-item-button {
      position: absolute;
      top: 10px;
      right: 0px;
      svg {
        margin-right: 16px;
      }
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.primary};
    }
  }
`;
