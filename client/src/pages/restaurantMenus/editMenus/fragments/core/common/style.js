import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledCategoryForm = styled.div``;

export const StyledProductForm = styled.div`
  .name-price-box {
    display: flex;
    align-items: center;
    .price-input {
      max-width: 98px;
      margin-left: 16px;
    }
  }
  .item-imgs-uploader {
    border: none;
    padding: 0px;
    margin-top: 40px;
    .content-container {
      .title {
        .active {
          color: ${colors.black};
        }
      }
    }
  }
`;
