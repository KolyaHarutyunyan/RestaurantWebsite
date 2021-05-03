import styled from "styled-components";

export const Container = styled.div`
  .g-title {
    text-align: center;
    margin-bottom: 72px;
  }
  margin-bottom: 172px;
  ul {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1500px;
    gap: 100px;
    li {
      .image {
        height: 200px;
      }
      flex: 1;
      height: 100%;
      p:first-of-type {
        text-align: center;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    }
  }
`;
