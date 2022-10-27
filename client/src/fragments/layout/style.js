import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-content {
    flex-grow: 1;
  }
  .main {
    flex-grow: 1;
    background-color: ${colors.neautralLightGray};
    display: flex;
    .main-content {
      width: 100%;
      padding: 0px;
      &.shown {
        padding: 24px 42px;
        @media (max-width: 610px) {
          padding: 34px 20px;
        }
      }
    }
  }
`;
