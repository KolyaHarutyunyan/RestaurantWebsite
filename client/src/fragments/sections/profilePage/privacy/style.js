import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000001a;
  border-radius: 8px;
  opacity: 1;
  padding: 32px 48px;
  margin-bottom: 15px;
  .head {
    display: flex;
    justify-content: flex-end;
  }
  .noth {
    line-height: 25px;
    .descr {
      color: #2b273c80;
    }
  }
  .input-descr {
    margin-bottom: 5px;
  }
  .input-box {
    margin-bottom: 10px;
  }
`;
