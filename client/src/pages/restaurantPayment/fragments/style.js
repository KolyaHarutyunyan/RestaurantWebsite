import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledRestaurantPayment = styled.section`
  .cancel-button-wrapper {
    padding: 0px 17px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
      margin-top: 24px;
    }
  }
  .cancel-button {
    margin-right: 16px;
    padding: 12px 81px;
    background-color: ${colors.primary};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${colors.white};
    @media (max-width: 768px) {
      padding: 12px 36px;
    }
  }
  .billing-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    .g-title {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      color: ${colors.secondary};
    }
    .active-plane {
      font-family: Open Sans, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: ${colors.secondary};
      @media (min-width: 320px) {
        margin: 24px 0 16px;
        font-size: 18px;
        line-height: 28px;
      }
      @media (min-width: 769px) {
        margin: 24px 0;
        font-size: 28px;
        line-height: 42px;
      }
      @media (min-width: 1440px) {
        margin: 40px 0 24px;
      }
    }
    .cards-wrapper {
      width: 100%;
      height: auto;
      background-color: ${colors.white};
      border: 1px solid #e9e9eb;
      border-radius: 8px;
      padding: 32px 48px;
      @media (min-width: 320px) {
        padding: 24px 16px;
      }
      @media (min-width: 769px) {
        padding: 24px;
      }
      @media (min-width: 1440px) {
        padding: 32px 48px;
      }
    }
  }
`;
