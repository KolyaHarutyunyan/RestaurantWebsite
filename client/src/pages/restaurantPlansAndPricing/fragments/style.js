import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledRestaurantPlansAndPricing = styled.section`
  width: 100%;
  cursor: default;
  .plans-and-pricing-title {
    font-family: Open Sans, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: ${colors.secondary};
  }
  .cards {
    display: flex;
    justify-content: center;
    margin: 24px 0px;
    .cards-wrapper {
      display: flex;
      justify-content: initial;
      .card {
        width: 302px;
        height: 655px;
        background: ${colors.white};
        border-top: 4px solid ${colors.primary};
        padding: 32px 20px;
        text-align: start;
        margin: 0 auto;
        &:not(:first-of-type) {
          margin-left: 32px;
        }
      }
      .title {
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 42px;
      }
      .sub-title {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin: 8px 0 33px;
      }
      .type {
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
      }
      .time {
        color: lightgray;
        font-size: 16px;
      }
      .get-button {
        width: 261px;
        height: 48px;
        background: ${colors.primary};
        border-radius: 8px;
        margin: 24px 0 49px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: ${colors.white};
        font-family: Open Sans, sans-serif;
      }
      .packages {
        li {
          list-style-type: none;
          display: flex;
          align-content: center;
          .svgDiv {
            width: 24px;
          }
          p {
            margin-left: 12px;
            font-family: Open Sans, sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 24px;
            color: ${colors.black};
            margin-bottom: 16px;
          }
        }
      }
    }
  }
`;
