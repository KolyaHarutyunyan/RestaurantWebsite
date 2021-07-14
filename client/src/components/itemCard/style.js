import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background: white;
  gap: 16px;
  .image {
    flex: 0 0 100px;
    border-radius: 8px;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
    svg {
      transform: scale(0.5);
    }
  }
  .poor {
    opacity: 0.6;
  }
  .content {
    flex: 1;
    .upper {
      display: flex;
      justify-content: space-between;
      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
    .under {
      display: flex;
      justify-content: space-between;
      .actions {
        display: flex;
        justify-content: flex-end;
        flex: 0 0 145px;
        gap: 10px;
        button {
          flex: 0 0 62px;
          display: flex;
          align-items: center;
          outline: 0;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 24px;
            height: 24px;
          }
          &.edit {
            color: ${colors.action};
            .icon {
              background-color: ${colors.action}1A;
            }
          }
          &.delete {
            color: ${colors.primary};
            .icon {
              background-color: ${colors.primary}1A;
            }
          }
        }
      }
    }
  }
`;
