import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  .wrapper {
    background: #f9f9f9;
    padding: 70px 0;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 129px;

    @media (min-width: 320px) {
      padding: 48px 32px;
      margin-bottom: 80px;
    }
    @media (min-width: 768px) {
      padding: 79px 70px;
      margin-bottom: 129px;
    }
    @media (min-width: 1440px) {
      padding: 70px 0;
    }
  }

  .small-wrapper {
    background: #f9f9f9;
    padding: 70px 0;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 129px;

    @media (min-width: 320px) {
      padding: 32px 32px;
      margin-bottom: 80px;
    }
    @media (min-width: 768px) {
      padding: 40px 70px;
      margin-bottom: 129px;
    }
    @media (min-width: 1440px) {
      padding: 40px 0;
    }
  }

  .g-title {
    text-align: center;
    font-family: Poppins, sans-serif;
    line-height: 72px;
    font-size: 48px;
    @media (max-width: 767px) {
      line-height: 36px;
      font-size: 28px;
    }
  }

  .descr {
    text-align: center;
    font-family: Open Sans, sans-serif;
    line-height: 24px;
    font-size: 16px;
    @media (min-width: 320px) {
      font-size: 14px;
      line-height: 21px;
      margin-top: 32px;
    }
    @media (min-width: 768px) {
      line-height: 24px;
      font-size: 16px;
      margin-top: 23px;
    }
  }

  .cards-wrapper {
    @media (min-width: 320px) {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
      margin-top: 64px;
      flex-direction: row;
    }

    .card:first-of-type {
      @media (min-width: 320px) {
        margin: 0 auto 24px;
      }
      @media (min-width: 768px) {
        margin-right: 24px;
      }
    }

    .card {
      width: 302px;
      height: 655px;
      background: #ffffff;
      border-top: 4px solid #ff453a;
      padding: 32px 20px;
      text-align: start;
      margin: 0 auto;
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

    .get-button {
      width: 261px;
      height: 48px;
      background: #ff453a;
      border-radius: 8px;
      margin: 24px 0 49px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
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
          color: #000000;
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export const CheckoutContainer = styled.div`
  .checkout-container-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: transparent;

    @media (min-width: 320px) {
      padding: 61px 0;
      flex-direction: column;
    }
    @media (min-width: 768px) {
      padding: 40px 0;
    }
    @media (min-width: 1440px) {
      padding: 80px 0;
      flex-direction: row;
      align-items: start;
    }
  }

  .form-wrapper {
    width: auto;
    height: 400px;
    background: white;
    border-radius: 8px;
    margin: 0 auto;
    @media (min-width: 320px) {
      padding: 28px 16px;
      margin: 0 16px;
      width: 340px;
    }
    @media (min-width: 768px) {
      padding: 20px 32px;
      width: 498px;
    }
    @media (min-width: 1440px) {
      padding: 20px 32px;
      width: 514px;
    }

    .title {
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #313131;
      margin: 12px 0 8px 0;
    }

    .input-style {
      height: 48px;
      width: 100%;
      border: 1px solid #7e7e7e;
      border-radius: 8px;
      padding: 12px 16px;
    }

    .buttons-wrapper {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .next-button {
      max-width: 217px;
      min-width: 130px;
      width: 100%;
      height: 42px;
      background: #ff453a;
      border-radius: 8px;
      color: white;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    .cancel-button {
      max-width: 217px;
      min-width: 130px;
      width: 100%;
      height: 42px;
      background: #e1e1e3;
      border-radius: 8px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #313131;
      margin-left: 16px;
    }

    .card-element {
      padding: 12px 16px;
      border: 1px solid #7e7e7e;
      border-radius: 8px;
      width: 100%;
      height: 48px;
    }
  }
`;

export const BillingContainer = styled.div`
  @media (min-width: 320px) {
    padding: 0 16px 75px;
  }
  @media (min-width: 768px) {
    padding: 0 46px 128px;
  }
  @media (min-width: 1440px) {
    padding: 0 80px 128px;
  }

  .cancel-button-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 40px;
  }

  .cancel-button {
    width: 273px;
    height: 48px;
    border: 1px solid #000000;
    border-radius: 24px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media (min-width: 320px) {
      width: 190px;
    }
    @media (min-width: 768px) {
      width: 273px;
    }
  }

  .billing-wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;

    @media (min-width: 320px) {
      //padding: 0 19px;
      //align-items: center;
    }
    @media (min-width: 768px) {
      padding: 0 40px;
      align-items: start;
    }
    @media (min-width: 1440px) {
      padding: 0 188px;
    }

    .active-plane {
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 42px;

      @media (min-width: 320px) {
        margin: 24px 0 16px;
        font-size: 18px;
        line-height: 28px;
      }
      @media (min-width: 768px) {
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
      background: white;
      border: 1px solid #e9e9eb;
      border-radius: 8px;
      padding: 32px 48px;
      @media (min-width: 320px) {
        padding: 24px 16px;
      }
      @media (min-width: 768px) {
        padding: 24px;
      }
      @media (min-width: 1440px) {
        padding: 32px 48px;
      }
    }
  }
`;
