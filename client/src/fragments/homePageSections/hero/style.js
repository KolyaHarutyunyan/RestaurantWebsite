import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px 130px 50px;
  .content {
    max-width: 520px;
    margin-right: 80px;
    flex: 1;
    .title-a {
      margin-bottom: 5px;
    }
    .description {
      margin-top: 32px;
    }
    button {
      margin-top: 77px;
    }
  }
  .image-wrapper {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    height: 757px;
    max-width: 1180px;
    .image {
      margin-top: 20px;
      max-width: 1141px;
    }
  }
`;
