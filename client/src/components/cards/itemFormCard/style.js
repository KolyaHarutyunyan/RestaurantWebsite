import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledItemFormCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  isolation: isolate;
  background-color: ${colors.white};
  @media (max-width: 610px) {
    padding: 32px 16px;
  }
  .close-form-card-button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 8px;
    right: 8px;
    background-color: ${colors.black50};
    border-radius: 32px;
  }
  form {
    width: 100%;
    height: 100%;
    .form-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .form-card-title {
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: ${colors.secondary};
        text-transform: capitalize;
        margin-bottom: 24px;
      }
      .form-content-wrapper {
        flex-grow: 1;
        width: 100%;
      }
      .form-save-cancel-btns {
        max-width: 100%;
        flex-direction: row-reverse;
        button {
          max-width: 214px;
        }
      }
    }
  }
`;
