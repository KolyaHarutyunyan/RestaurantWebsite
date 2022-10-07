import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledRestaurantSettings = styled.section`
  .settings-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;
