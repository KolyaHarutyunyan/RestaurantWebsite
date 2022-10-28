import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMenusSettings = styled.div`
  cursor: default;
  .menus-settings-tabs {
    @media (max-width: 610px) {
      height: 100vh;
      & .tab-panels-wrapper {
        height: 100%;
        background-color: ${colors.white};
      }
    }
  }
`;
