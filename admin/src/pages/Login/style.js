import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;

  .box {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: calc(50% - (250px / 2));
    left:0;
    right:0;
    //top: calc(50% - (250px / 2));
    //left: calc(50% - (370px / 2));
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    width: 370px;
    height: 250px;
    background-color: var(--filling);
    color: white;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding-bottom: 10px;

      button {
        width: 100%;
        margin: 10px 0;
        background: #E9E9EB;
        height: 40px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
      }

      button:hover {
        background: #b7b7b8;
      }

      input {
        height: 40px;
        width: 100%;
        margin: 20px 0 0 0;
        padding: 0 12px;
        border-radius: 8px;
        border: none;
      }
    }
  }
  .error{
    color: red;
    font-size: 16px;
    height: 20px;
    margin: 10px 0;
  }
`;
