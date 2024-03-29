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
      @media (max-width: 767px) {
        font-size: 24px;
        line-height: 36px;
      }
    }
    
    & button {
      max-width: 180px;
      @media (max-width: 767px) {
        max-width: 148px;
      }
    }
  }
  
  .no-yet{
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: ${colors.textGray};
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  
  .menus-list-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
