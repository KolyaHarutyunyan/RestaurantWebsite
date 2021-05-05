import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 97.6vh;
  .box {
    position: absolute;
    top: calc(50% - (250px / 2));
    left: calc(50% - (370px / 2));
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
      input,
      button {
        width: 100%;
        margin: 10px 0;
      }
    }
  }
`;
