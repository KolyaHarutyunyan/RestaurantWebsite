import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledEditMenus = styled.div`
  cursor: default;
  .edit-menus-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back-arrow-icon {
      width: 32px;
      height: 32px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      display: none;
      svg {
        width: 100%;
      }
      @media (max-width: 1279px) {
        &.shown {
          display: flex;
        }
      }
    }
    .edit-menus-breadcrumb {
      @media (max-width: 1279px) {
        &.hidden {
          display: none;
        }
      }
    }
    .preview-button {
      max-width: 176px;
      @media (max-width: 1279px) {
        &.hidden {
          display: none;
        }
      }
      @media (max-width: 767px) {
        position: fixed;
        max-width: calc(100% - 40px);
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
      }
    }
  }
  .edit-menus-nav {
    position: relative;
    width: 100%;
    .edit-menus-tabs {
      @media (max-width: 1279px) {
        &.hidden .tabs-wrapper {
          visibility: hidden;
        }
      }
      .tabs-wrapper {
        margin-bottom: 16px;
        max-width: 302px;
        background-color: ${colors.white};
        border-radius: 8px;
        padding: 0px;
        visibility: visible;
        @media (max-width: 1279px) {
          max-width: 100%;
        }
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
            @media (max-width: 1279px) {
              margin-right: 0px;
            }
          }
          &.Mui-selected {
            background-color: ${colors.yellowOrange};
            color: ${colors.neautralLightGray};
          }
          @media (max-width: 1279px) {
            max-width: 50%;
          }
        }
        span.MuiTabs-indicator {
          height: 0px;
        }
      }
      .tab-panels-wrapper {
        .MuiBox-root {
          background-color: inherit;
          @media (max-width: 1279px) {
            padding: 0px;
          }
          @media (max-width: 1279px) {
            padding-top: 8px;
          }
        }
      }
    }
  }
`;
