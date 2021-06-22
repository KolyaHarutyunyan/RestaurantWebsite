import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  height: 64px;
  @media only screen and (max-width: 1280px) {
    text-align: center;
  }
  overflow: hidden;
  background-color: ${colors.primary};
  @media only screen and (max-width: 768px) {
    height: 100px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 100%;
    @media only screen and (max-width: 1280px) {
      align-items: center;
      padding-bottom: 15px;
    }
    @media only screen and (max-width: 768px) {
      height: 100px;
      flex-direction: column-reverse;
    }
    .copyright {
      min-width: 280px;
    }
    .copyright,
    .logo-container {
      flex: 1;
    }
    .logo-container {
      @media only screen and (max-width: 768px) {
        display: none;
      }
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media only screen and (max-width: 768px) {
        margin-top: 10px;
      }
      p {
        margin-left: 5px;
      }
    }
    .links {
      flex: 2;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
      }
      a {
        padding-right: 10px;
        color: white;
      }
      a:last-child {
        padding-left: 10px;
        border-left: 1px solid #ffffff80;
        @media only screen and (max-width: 768px) {
          padding-right: 0;
        }
      }
    }
  }
`;
