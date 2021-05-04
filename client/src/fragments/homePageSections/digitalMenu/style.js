import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  height: 720px;
  margin-bottom: 160px;
  .image.main {
    flex: 0 0 540px;
  }
  .content {
    max-width: 610px;
    .g-title {
      margin-bottom: 72px;
      line-height: 50px;
      text-align: center;
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
