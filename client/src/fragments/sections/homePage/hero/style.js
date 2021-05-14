import styled from "styled-components";
import { media } from "@eachbase/theme";
export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px 130px 50px;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
  .content {
    max-width: 520px;
    margin-right: 80px;
    flex: 1;
    .title-a {
      margin-bottom: 5px;
      @media (max-width: 1600px) and (min-width: 768px) {
        margin-top: 72px;
      }
    }
    .description {
      margin-top: 32px;
      @media (max-width: 1600px) and (min-width: 768px) {
        margin-top: 24px;
      }
    }
    button {
      margin-top: 77px;
      @media (max-width: 1600px) and (min-width: 768px) {
        margin-top: 48px;
      }
    }
  }
  .image-wrapper {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    height: 757px;
    max-width: 1180px;
    @media (max-width: 1280px) {
      max-width: 100%;
      height: 430px;
    }
    @media (max-width: 1600px) and (min-width: 768px) {
      max-width: 620px;
      height: 387px;
    }
    @media (max-width: 1280px) {
      width: 100%;
      flex: 0 0 430px;
    }
    .image {
      margin-top: 20px;
      max-width: 1141px;
      @media (max-width: 1280px) {
        margin-top: 76px;
      }
    }
  }
`;
