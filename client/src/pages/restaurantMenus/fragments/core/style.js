import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMenuItem = styled.section`
  max-width: 373px;
  width: 100%;
  @media (max-width: 1279px) {
    max-width: 304px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
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
    cursor: pointer;
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
      transition: background-color 0.3s ease-in-out;
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
      padding: 4px 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid ${colors.lightGray};
      .menu-settings-icon-button {
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }
    }
  }
`;
