import styled from "styled-components";

export const Container = styled.div`
  margin-top: calc(130px * 2);
  @media only screen and (max-width: 1280px) {
    margin-top: calc(70px * 2);
  }
  @media only screen and (max-width: 768px) {
    margin-top: calc(60px * 2);
  }
  .g-title {
    text-align: center;
    margin-bottom: 72px;
  }
  margin-bottom: 172px;
  ul {
    display: flex;
    @media (max-width: 1280px) {
      flex-direction: column;
      max-width: 688px;
      text-align: center;
    }
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1500px;
    gap: 100px;
    li {
      flex: 1;
      .image {
        width: 100%;
        height: 200px;
        @media (max-width: 1280px) {
          max-width: 356px;
          height: 172px;
        }
      }
      height: 100%;
      p:first-of-type {
        text-align: center;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    }
  }
`;
