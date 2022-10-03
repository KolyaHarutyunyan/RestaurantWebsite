import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledActivePlan = styled.div`
  .active-plan-wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .title {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.secondary};
    margin-bottom: 24px;
  }
  .items-wrapper {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    .standart-text {
      margin-left: 16px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #7e7e7e;
      span {
        color: ${colors.black};
        &.status {
          color: ${colors.green};
        }
      }
    }
    .features-text {
      margin-left: 16px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
    }
  }
  .upgrade-button-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .upgrade {
      width: 132px;
      height: 38px;
      background: #f03939;
      border-radius: 24px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: ${colors.white};
      margin-top: 24px;
    }
  }
  .plan-line {
    margin: 42px 0 24px;
    border: 1px solid #e9e9eb;
    background: transparent;
  }
  .plan-info {
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7e7e7e;
    @media (min-width: 320px) {
      font-size: 12px;
    }
    @media (min-width: 1440px) {
      font-size: 14px;
    }
  }
  .icon-wrapper {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex-able-wrapper {
    display: flex;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 1440px) {
      flex-direction: row;
    }
    .first-wrap {
      width: 240px;
      text-align: start;
    }
    .second-wrap {
      @media (min-width: 320px) {
        margin-left: 0;
      }
      @media (min-width: 1440px) {
        margin-left: 33px;
      }
    }
  }
`;

export const StyledPaymentMethod = styled.div`
  .title {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.black};
    margin-bottom: 24px;
  }
  .cards-wrapper-section {
    display: flex;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 767px) {
      flex-direction: row;
    }
  }
  .card-wrapper {
    width: 100%;
    max-width: 285px;
    height: 164px;
    background: #f9f9f9;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    padding: 26px 24px;
    margin-right: 10px;
  }
  .visa-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p {
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.secondary};
    }
  }
  .card-date {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.black};
    margin: 16px 0 32px 0;
  }
  .action-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      &.edit-btn {
        color: ${colors.yellowOrange};
      }
      &.delete-btn {
        margin-left: 16px;
        color: ${colors.primary};
      }
    }
  }
  .we-accept-wrapper {
    display: flex;
    align-items: center;
    margin-top: 18px;
    svg {
      margin-right: 9px;
    }
  }
  .we-accept {
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #313131;
    margin-right: 12px;
  }
  .add-card {
    width: 275px;
    height: 164px;
    border: 1px solid #e9e9eb;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) {
      margin-top: 16px;
    }
    @media (min-width: 767px) {
      margin-top: 0;
    }
    .add-card-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.yellowOrange};
      svg {
        margin-bottom: 19px;
        path {
          fill: ${colors.yellowOrange};
        }
      }
    }
  }
`;

export const StyledInvoiceTable = styled.div`
  width: 100%;
  .actions-wrapper {
    max-width: 165px;
    display: flex;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* .mobile-cards-table {
    @media (min-width: 320px) {
      display: block;
    }
    @media (min-width: 767px) {
      display: none;
    }
    .mobile-cards-item {
      width: auto;
      min-height: 152px;
      height: auto;
      margin-bottom: 8px;
      background: ${colors.white};
      border-radius: 8px;
      padding: 16px 24px;
    }
    .title-info-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .title {
        width: 80px;
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: ${colors.secondary};
        margin-right: 22px;
      }
      .info {
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #51566d;
      }
    }
    .buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  } */
  .cards-table {
    width: 100%;
    height: auto;
    background: white;
    border: 1px solid #e9e9eb;
    border-radius: 8px;
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 767px) {
      display: block;
    }
    .cards-table-head {
      display: flex;
      justify-content: space-between;
      background: #cacacb;
      border-radius: 8px 8px 0 0;
      width: 100%;
      padding: 16px 32px;
      p {
        width: 100%;
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: ${colors.secondary};
      }
    }
    .cards-table-body {
      background: ${colors.white};
      border-radius: 8px;
      height: 200px;
    }
    .cards-table-body-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px 32px;
      border-bottom: 1px solid #ced8e5;
      p {
        width: 100%;
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #51566d;
      }
    }
  }
`;

export const StyledPayInfo = styled.div`
  width: auto;
  height: auto;
  background: white;
  border-radius: 8px;
  @media (min-width: 320px) {
    margin: 8px 16px 0;
    padding: 16px;
    width: 340px;
  }
  @media (min-width: 768px) {
    width: 499px;
  }
  @media (min-width: 1440px) {
    width: 330px;
    margin: 0;
  }
  .items-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    p {
      margin-left: 12px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.black};
    }
  }
  .price-title {
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.black};
  }
  .plane-type {
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.black};
  }
  .check-wrapper {
    display: flex;
    align-items: start;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    a {
      color: ${colors.primary};
    }
  }
  .check-text-style {
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
    color: ${colors.text};
  }
`;

export const InvoiceInfoContainer = styled.div`
  .invoice-head {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
