import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledSettingsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
  .file-upload-box {
    max-width: 583px;
  }
  .address-inputs-box {
    max-width: 583px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .address-input {
      max-width: 100%;
      &.closed {
        max-width: 283px;
        @media (max-width: 760px) {
          max-width: 100%;
        }
      }
    }
  }
  .hours-of-operation-box {
    max-width: 583px;
    width: 100%;
    margin-bottom: 16px;
    .accordion-toggler {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      svg.shown {
        transform: rotate(180deg);
      }
    }
    .weekdays-box {
      width: 100%;
      padding: 24px;
    }
  }
  .settings-save-cancel-buttons {
    @media (max-width: 760px) {
      flex-direction: column-reverse;
      max-width: 100%;
      row-gap: 16px;
      & button {
        max-width: 100%;
      }
    }
  }
`;

export const StyledSocialAccountsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
  .settings-save-cancel-buttons {
    @media (max-width: 760px) {
      flex-direction: column-reverse;
      max-width: 100%;
      row-gap: 16px;
      & button {
        max-width: 100%;
      }
    }
  }
`;
