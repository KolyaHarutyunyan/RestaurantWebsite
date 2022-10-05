import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledSettingsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
  .address-inputs-box {
    max-width: 583px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .address-input {
      max-width: 283px;
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
`;

export const StyledSocialAccountsTabItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: inherit;
`;

export const StyledFormActionsBox = styled.div`
  max-width: 583px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    max-width: 284px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    &.cancel-button {
      background-color: #f5f5f5;
      color: ${colors.secondary};
    }
    &.save-button {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;
