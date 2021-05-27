import styled from "styled-components";

export const Container = styled.div`
  .select-create-category {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin: 40px 0;
    select {
      flex: 1;
    }
    button {
      flex: 0 0 140px;
    }
  }
  .categories {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      box-shadow: 0px 0px 6px #0000001a;
      flex: 0 0 56px;
      border: 1px solid;
      border-color: #0000001a;
      border-radius: 8px;
      .category-name {
        display: flex;
        align-items: center;
        gap: 10px;
        button {
          display: flex;
          gap: 10px;
          align-items: center;
          .icon {
            font-size: 1.5rem;
            background-color: #ffe3e1;
          }
        }
      }
    }
  }
`;
