import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  min-height: 64px;
  padding: 20px 80px;
  //position: absolute;
  //bottom: 0;
  //width: 100%;
  @media only screen and (max-width: 1279px) {
    text-align: center;
    padding: 20px 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
  overflow: hidden;
  background-color: ${colors.primary};
  @media only screen and (max-width: 768px) {
    min-height: 100px;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 100%;
    font-family: Open Sans, sans-serif;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      min-height: 100px;
      flex-direction: column;
    }
    .copyright {
      min-width: 280px;
      text-align: left;
      font-family: Open Sans, sans-serif;
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
    .copyright,
    .logo-container {
      flex: 1;
    }
    .logo-container {
      @media only screen and (max-width: 1024px) {
        display: none;
      }
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media only screen and (max-width: 768px) {
        /* margin-top: 10px; */
      }
      p {
        margin-left: 5px;
      }
    }
    .contact-us-link {
      display: none;
      @media (max-width: 768px) {
        display: block;
        margin: 16px 0px 20px;
      }
    }
    .links {
      align-items: center;
      justify-content: center;
      text-align: center;
      @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
      }
      a {
        cursor: pointer;
        color: white;
      }
      a:not(:first-child) {
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid #ffffff80;
      }
      a:last-child {
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;
