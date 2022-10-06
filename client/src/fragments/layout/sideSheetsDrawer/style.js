import styled from "styled-components";
import Box from "@mui/material/Box";
import { colors } from "@eachbase/theme";

export const StyledSideSheetsDrawer = styled(Box)`
  .collapse {
    position: fixed;
    width: 34px;
    height: 34px;
    top: 57px;
    left: 207px;
    z-index: 9999999;
    cursor: pointer;
    transition: left 0.2s ease-in-out;
    &.closed {
      left: 47px;
    }
  }
  .restaurant-profile-box {
    display: flex;
    justify-content: initial;
    align-items: center;
    cursor: pointer;
    .restaurant-profile {
      width: 24px;
      height: 24px;
    }
    .restaurant-name {
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.secondary};
      margin: 0px 14px 0px 10px;
      &.closed {
        display: none;
      }
    }
    .arrow {
      &.closed {
        display: none;
      }
    }
  }
  .menumangoLogo {
    &.closed {
      display: none;
    }
  }
  .side-sheets-list {
    flex-grow: 1;
    margin-top: 37px;
    .side-sheet-item {
      position: relative;
      display: flex;
      .side-sheet-item-button {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: initial;
        align-items: center;
        padding: 10px 18px 10px 26px;
        margin: 2px 0px;
        cursor: pointer;
        border-radius: 8px;
        &.closed {
          max-width: 50px;
          justify-content: center;
          padding: 10px 0px;
          margin: 2px auto;
          .arrow {
            display: none;
          }
        }
        &:hover {
          background-color: #f5f5f5;
          .side-sheet-item-icon {
            svg {
              path {
                fill: #292d32;
              }
            }
          }
          .side-sheet-item-text {
            font-weight: 600;
          }
          svg.arrow {
            path {
              stroke: #292d32;
            }
          }
        }
        &.shown {
          svg.arrow {
            transform: rotate(180deg);
          }
        }
        &.active {
          background-color: ${colors.active};
          .side-sheet-item-icon {
            svg {
              path {
                fill: ${colors.primary};
              }
            }
          }
          .side-sheet-item-text {
            color: ${colors.primary};
            font-weight: 600;
          }
          svg.arrow {
            path {
              stroke: ${colors.primary};
            }
          }
        }
        .side-sheet-item-icon {
          width: 24px;
          height: 24px;
          min-width: 0;
          justify-content: center;
          svg {
            path {
              fill: ${colors.halfBlack};
            }
          }
        }
        .side-sheet-item-text {
          font-family: Open Sans, sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: ${colors.secondary};
          margin-left: 10px;
          &.closed {
            display: none;
          }
        }
        .arrow {
          margin-left: auto;
          transform: rotate(0deg);
        }
      }
      .page-list {
        max-width: 167px;
        width: 100%;
        position: absolute;
        top: 44px;
        left: 49px;
        .page-item {
          width: 100%;
          margin-top: 4px;
          list-style: none;
          padding: 12px 16px;
          cursor: pointer;
          border-radius: 8px;
          &.closed {
            display: none;
          }
          &:hover {
            background-color: #f5f5f5;
            .side-sheet-item-text {
              font-weight: 600;
            }
          }
          &.active {
            background-color: ${colors.active};
            .side-sheet-item-text {
              color: ${colors.primary};
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;
