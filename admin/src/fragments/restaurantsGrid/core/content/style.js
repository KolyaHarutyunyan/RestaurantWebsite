import styled from "styled-components";

export const Container = styled.div`
  .row {
    &:hover {
      background-color: var(--filling-third);
    }
    cursor: pointer;
    transition: background-color 0.3s;
    height: 50px;
    background: white;
    &::not(::last-child) {
      border-bottom: 1px solid var(--filling-third);
    }
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--filling-third);
    .col {
      display: flex;
      align-items: center;
      flex: 1;
      padding-left: 10px;
      &:nth-child(2) {
        flex: 0 0 180px;
      }
    }

    .restaurant-name {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 40px;
        height: 40px;
        margin-left: 10px;
      }
      .title {
        max-width: 150px;
        overflow: hidden;
        text-overflow: dotted;
      }
    }
  }
`;
