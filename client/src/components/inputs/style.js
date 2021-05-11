import styled from "styled-components";

export const InputContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    height: 100%;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
    height: 36px;
    border-radius: 8px;
    .icon-container {
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 0 0 30px;
    }
    .input-container {
      display: flex;
      .controller-eye {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      flex: 1;
      height: 100%;

      input {
        padding: 0 5px 0 5px;
        margin: 0;
        height: 100%;
        width: 100%;
        border: none;
        outline: 0;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 5px;
    font-size: 0.8rem;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;

export const TextareaContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
    border-radius: 8px;
    .icon-container {
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      flex: 0 0 30px;
    }
    .input-container {
      flex: 1;
      textarea {
        padding: 5px 5px 0 5px;
        margin: 0;
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        outline: 0;
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 5px;
    font-size: 0.8rem;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;
