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
  }
  .menus-list-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
