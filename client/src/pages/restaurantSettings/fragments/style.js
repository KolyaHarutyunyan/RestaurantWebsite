import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledRestaurantSettings = styled.section`
  .settings-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 760px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .settings-title {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: ${colors.secondary};
      @media (max-width: 760px) {
        margin-bottom: 16px;
      }
    }
    .qr-code-link {
      display: inline-flex;
      align-items: center;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.primary};
      svg {
        margin-right: 7px;
      }
    }
  }
  .restaurant-settings-tab {
    .tab-panels-wrapper {
      .MuiBox-root {
        min-height: 73vh;
      }
    }
  }
`;
