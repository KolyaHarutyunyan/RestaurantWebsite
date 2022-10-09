import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMuiTabs = styled.div`
  cursor: default;
  .tabs-box {
    width: 100%;
    border-radius: 8px;
    margin-top: 24px;
    overflow: hidden;
    .tabs-wrapper {
      width: 100%;
      padding: 0px 24px;
      background-color: ${colors.lightGray};
      .tab {
        padding: 16px 24px;
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.black600};
        text-transform: capitalize;
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        &.Mui-selected {
          color: ${colors.primary};
        }
      }
      span.MuiTabs-indicator {
        background-color: ${colors.primary};
        height: 4px;
      }
    }
  }
`;
