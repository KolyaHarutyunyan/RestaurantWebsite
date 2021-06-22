import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background: white;
  gap: 16px;
  .image {
    flex: 0 0 100px;
    border-radius: 8px;
    background-color: #e7e7e7;
  }
  .content {
    flex: 1;
    .upper {
      display: flex;
      justify-content: space-between;
      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
    .under {
      display: flex;
      justify-content: space-between;
      .actions {
        display: flex;
        justify-content: flex-end;
        flex: 0 0 145px;
        gap: 10px;
        button {
          flex: 1;
          display: flex;
          align-items: center;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 24px;
            height: 24px;
          }
        }
      }
    }
  }
`;
