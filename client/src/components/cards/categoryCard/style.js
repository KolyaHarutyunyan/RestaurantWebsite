import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledCategoryCard = styled.section`
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 8px;
  .category-add-box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .category-list-box {
    width: 100%;
    margin-top: 16px;
    .category-list {
      width: 100%;
      .category-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
        border-radius: 8px;
        background-color: ${colors.neautralLightGray};
        cursor: pointer;
        &.current {
          background-color: ${colors.lightGray};
        }
        &.inactive {
          opacity: 0.6;
        }
        .category-name-box {
          display: flex;
          align-items: center;
          .category-name {
            font-family: Open Sans, sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: ${colors.secondary};
            margin-left: 8px;
          }
        }
        .category-action-box {
          display: flex;
          align-items: center;
          .right-arrow {
            width: 24px;
            height: 24px;
            margin-left: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
