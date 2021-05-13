import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .qr-button {
      display: flex;
      align-items: center;
      color: ${colors.typography.active} !important;
      svg {
        transform: scale(1.4);
        margin-right: 5px;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    .restaurant-card,
    .extra-details-card {
      box-shadow: 1px 1px 14px #d6d6d6;
      margin: 10px 0;
      border-radius: 5px;
      padding: 20px;
      .header {
        .title {
        }
        .action {
        }
      }
      .content {
      }
    }
    .menu-list {
      padding-top: 30px;
      grid-column: 1/2;
    }
  }
`;
