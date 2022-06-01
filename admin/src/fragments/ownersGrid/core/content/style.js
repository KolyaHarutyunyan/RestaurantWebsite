import styled from "styled-components";

export const Container = styled.div`
  min-height: 60vh;
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
      .chevron-icon {
        width: 30px;
      }
      &:nth-child(2) {
        flex: 2;
      }
    }
    .delete-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      outline: 0;
      border: none;
      padding: 5px;
      font-size: 20px;
      background-color: #ffeceb;
      color: #ff453a;
      border-radius: 10px;
    }
    .switch {
      margin-left: 10px;
    }
    .restaurant-name {
      display: flex;
      width: 100%;
      align-items: center;
      .logo {
        width: 30px;
        height: 30px;
        margin-right: 8px;
        border-radius: 40px;
        object-fit: cover;
      }
      .title {
        //max-width: 150px;
        //overflow: hidden;
        //text-overflow: dotted;
      }
    }
  }
`;
