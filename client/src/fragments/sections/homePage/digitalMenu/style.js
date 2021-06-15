import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  height: 720px;
  margin-bottom: 160px;
  @media only screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    margin-top: 460px;
  }
  .image.main {
    flex: 0 0 540px;
    @media (max-width: 1280px) {
      max-width: 800px;
      height: 446px;
    }
  }
  .content {
    max-width: 610px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .g-title {
      margin-bottom: 72px;
      line-height: 50px;
      text-align: center;
    }
    .image {
      margin-top: 64px;
      width: 140px;
      height: 120px;
    }
  }
  .qr {
    position: absolute;
    width: 400px;
    height: 400px;
    left: 30%;
    top: 20%;
    opacity: 0.02;
  }
`;
