import styled from "styled-components";
import { media } from "@eachbase/theme";
export const Container = styled.section`
  width: 100%;
  background: transparent
    linear-gradient(180deg, #80808033 0%, #e8e8e899 41%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
  @media (min-width: 320px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    padding: 0 0 0 40px;
  }
  @media (min-width: 1279px) {
    padding: 0 0 0 42px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 0 100px;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 320px) {
      align-items: flex-start;
    }
    @media (min-width: 768px) {
      align-items: flex-start;
    }

    //padding: 60px 0 0 0;

    @media only screen and (max-width: 1279px) {
      flex-direction: column;
    }
    @media only screen and (max-width: 768px) {
      padding: 60px 16px 0 16px;
    }

    .content {
      @media only screen and (max-width: 768px) {
        margin-right: 0 !important;
      }

      @media (min-width: 320px) {
        margin-top: 92px;
        max-width: 100%;
      }
      @media (min-width: 768px) {
        margin-top: 185px;
        max-width: 100%;
      }
      @media (min-width: 1279px) {
        margin-top: 185px;
        margin-right: 51px;
        max-width: 40%;
      }
      @media (min-width: 1920px) {
        margin-top: 255px;
        margin-right: 80px;
        max-width: 31%;
      }

      flex: 1;

      .title {
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 47px;

        @media (max-width: 768px) {
          font-size: 24px;
        }

        margin-bottom: 5px;
        @media (max-width: 1600px) and (min-width: 768px) {
          //margin-top: 72px;
          align-items: center;
        }
      }
      .description {
        font-family: Open Sans, sans-serif;
        font-size: 20px;
        line-height: 30px;
        margin: 32px 0 64px 0;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16px 0 32px 0px;
        }
        @media (max-width: 1919px) {
          margin: 24px 0 48px 0;
        }
      }
      button {
        width: 232px;
        @media (max-width: 768px) {
          width: 217px;
        }
        //margin-top: 77px;
        //@media (max-width: 1600px) and (min-width: 768px) {
        //  margin-top: 48px;
        //}
      }
    }
    .image-wrapper {
      //padding: 70px 24px 20px 0;
      //padding-right: 24px;
      //padding-bottom: 20px;

      flex: 3;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      width: 100%;

      @media (min-width: 320px) {
        justify-content: center;
        background: none;
      }
      @media (min-width: 768px) {
        justify-content: center;
        background: none;
      }
      @media (min-width: 1279px) {
        padding: 150px 42px 60px 30px;
        justify-content: flex-end;
        flex: 1;
        background: linear-gradient(
          to top,
          #ffffff,
          #fbfbfb,
          #f6f6f6,
          #f2f2f2,
          #eeeeee,
          #eaeaea,
          #e6e6e6,
          #e2e2e2,
          #dddddd,
          #d8d8d8,
          #d4d4d4,
          #cfcfcf
        );
      }
      @media (min-width: 1920px) {
        padding: 190px 21px 80px 40px;
        justify-content: flex-end;
        background: linear-gradient(
          to top,
          #ffffff,
          #fbfbfb,
          #f6f6f6,
          #f2f2f2,
          #eeeeee,
          #eaeaea,
          #e6e6e6,
          #e2e2e2,
          #dddddd,
          #d8d8d8,
          #d4d4d4,
          #cfcfcf
        );
      }

      //@media (max-width: 1280px) {
      //  max-width: 100%;
      //  height: 430px;
      //  justify-content: center;
      //}
      //@media (max-width: 1600px) and (min-width: 768px) {
      //  max-width: 100%;
      //  height: 387px;
      //  justify-content: center;
      //}
      //@media (max-width: 1280px) {
      //  width: 100%;
      //  flex: 0 0 430px;
      //}
      .image {
        height: 100%;
        width: 100%;

        @media (min-width: 320px) {
          height: 208px;
          max-width: 343px;
          margin-top: 51px;
        }
        @media (min-width: 768px) {
          height: 418px;
          max-width: 688px;
          margin-top: 64px;
        }
        @media (min-width: 1279px) {
          height: auto;
          max-width: 1143px;
          margin-top: 32px;
        }
        //@media (min-width: 1500px) {
        //  height: auto;
        //  max-width: 1143px;
        //  margin-top: 32px;
        //}
        @media (min-width: 1920px) {
          height: 694px;
          max-width: 1143px;
          margin-top: 32px;
        }

        //@media (max-width: 1280px) {
        //  margin-top: 76px;
        //}
      }
    }
  }
`;
