import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMoreDropdown = styled.div`
  position: relative;
  padding: 4px 0px;
  &:hover .menu-more-dropdown-content {
    display: flex;
  }
  .menu-more-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
      padding: 9px 24px;
      background-color: inherit;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
      text-align: left;
      &.danger {
        color: ${colors.primary};
      }
      &:hover {
        background-color: ${colors.lightGray};
      }
    }
  }
`;
