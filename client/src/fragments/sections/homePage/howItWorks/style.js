import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  .g-title {
    text-align: center;
    margin-bottom: 72px;
  }
  section {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1280px) {
      flex-direction: column;
    }
    align-items: center;
    &:nth-of-type(1) {
      gap: 80px;
      margin-bottom: 160px;
      .image {
        max-width: 800px;
        min-height: 446px;
      }
      ul {
        li {
          @media (max-width: 1280px) {
            margin: 32px 35px;
          }
          position: relative;
          .num {
            &::before {
              position: absolute;
              content: "";
              height: 20px;
              right: 0px;
              bottom: 0;
              background-color: ${colors.primary};
              border-bottom-right-radius: 5px;
              width: 20px;
            }
            &.line::after {
              content: "";
              position: absolute;
              top: 50px;
              width: 2px;
              background-color: ${colors.text};
              height: 48px;
            }
            width: 45px;
            height: 45px;
            display: inline-flex;
            text-align: center;
            justify-content: center;
            padding: 10px;
            position: absolute;
            left: -40px;
            top: -10px;
            background-color: ${colors.primary};
            color: ${colors.white};
            border-radius: 50%;
          }
          padding-left: 20px;
          p:first-of-type {
            margin-bottom: 8px;
          }
          margin-bottom: 32px;
        }
      }
    }
    &:nth-of-type(2) {
      @media (max-width: 1280px) {
        flex-direction: column-reverse;
      }
      gap: 80px;
      margin-bottom: 160px;
      ul {
        max-width: 465px;
        @media (max-width: 1280px) {
          max-width: 100%;
        }
        li {
          display: flex;
          gap: 40px;
          margin-bottom: 24px;
          .checkmark {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            flex: 0 0 45px;
            height: 45px;
            background-color: #54c762;
            color: white;
            border-radius: 50%;
          }
          .content {
            p:first-child {
              margin-bottom: 8px;
            }
          }
        }
      }
      .image {
        max-width: 800px;
        height: 446px;
      }
    }
  }
`;
