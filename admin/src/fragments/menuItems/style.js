import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  .restaurant {
    display: flex;
    align-items: center;
    height: 60px;
    overflow: hidden;
    padding: 0 15px;
    .name {
      font-weight: bold;
    }
    img {
      margin-right: 15px;
      width: 45px;
      height: 45px;
    }
  }
  .content {
    height: calc(100% - 105px);
    padding: 0 15px;
    overflow: auto;
    padding: 10px 15px 0px 15px;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;
