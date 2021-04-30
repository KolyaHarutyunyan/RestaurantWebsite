import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--shadow);
    border-radius: 8px;
    padding: 8px;
    .img {
      flex: 0 0 80px;
      padding: 2px;
      height: 80px;
      background-position: center;
      background-size: cover;
      border-radius: 10px;
    }
    .content {
      padding: 15px 8px 0px 8px;
      flex: 1;
      height: 100%;
      .head {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        font-size: 1.1rem;
        font-weight: bold;
        .price {
          &::after {
            content: "$";
          }
        }
        margin-bottom: 15px;
      }
      .descr {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
