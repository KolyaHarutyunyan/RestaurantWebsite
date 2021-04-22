import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  height: 60px;
  background-color: var(--filling);
  color: var(--light-text);
  .menu {
    display: flex;
    .item {
      cursor: pointer;
      display: flex;
      margin-left: 30px;
      .logo {
        margin-right: 5px;
      }
      .title {
        font-weight: 400;
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    .title {
      margin-left: 5px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .img {
      width: 30px;
      height: 30px;
    }
  }
`;
