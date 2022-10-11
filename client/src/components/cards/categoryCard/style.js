import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledCategoryCard = styled.section`
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 8px;
  .category-form {
    display: flex;
    align-items: center;
    .category-input {
      max-width: 100%;
      margin: 0px 16px 0px 0px;
    }
  }
  .category-list-box {
    width: 100%;
    .category-list {
      width: 100%;
      .category-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .category-name-box {
          display: flex;
          align-items: center;
          .category-name {
            margin-left: 8px;
          }
        }
        .category-action-box {
          display: flex;
          align-items: center;
          svg {
            margin-left: 8px;
          }
        }
      }
    }
  }
`;
