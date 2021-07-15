import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  .g-title {
    text-align: center;
    font-family: Poppins,sans-serif;
    line-height: 72px;
    font-size: 48px;
    @media (max-width: 767px) {
      line-height: 36px;
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
  .descr {
    text-align: center;
    font-family: Open Sans, sans-serif;
    line-height: 24px ;
    font-size: 16px;
    @media (min-width: 320px) {
      font-size: 14px;
      line-height:21px ;
      margin-top: 17px;
    }
    @media (min-width: 768px) {
      line-height: 24px ;
      font-size: 16px;
      margin-top: 64px;
    }
  }
  .cards {
    text-align: initial;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 50px 100px;
    margin-top: 72px;
    overflow: auto;
    li {
      &:nth-child(2n) {
        transform: scale(0.7);
      }
      &:nth-child(7),
      &:nth-child(9) {
        transform: translateY(-60px);
      }
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 300px;

      .image {
        flex: 1;
        border-radius: 8px 8px 0 0;
      }
      p {
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 40px;
        box-shadow: 0px 4px 4px #eaeaea;
      }
    }
  }
  button {
    margin-top: 72px;
    margin-bottom: 160px;
    width: 240px;

    @media (max-width: 767) {
      width: 201px;
    }
  }
`;
