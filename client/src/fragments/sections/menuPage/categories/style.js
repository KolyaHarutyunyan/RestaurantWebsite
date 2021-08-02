import styled from "styled-components";

export const Container = styled.div`
  .select-create-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin: 35px 0 25px 0;
    .select-wrapper {
      flex: 1;
    }
    button {
      flex: 0 0 140px;
    }
  }
  
  .categories {
    flex-direction: column;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
      height: auto;
      //height: 150px;
    }
    li {
      margin-bottom: 10px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 32px;
      box-shadow: 0px 0px 6px #0000001a;
      flex: 0 0 56px;
      height: 56px;
      @media (max-width: 767px) {
        height: 48px;
      }
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;
      &:hover,
      &.selected {
        background-color: #efefef;
      }
      .category-name {
        display: flex;
        align-items: center;
        font-family: Open Sans, sans-serif;
        color: #2B273C;
        font-size: 20px;
        @media (max-width: 767px) {
          font-size: 16px;
        }
        font-weight: 600;
        gap: 16px;
        button {
          display: flex;
          gap: 8px;
          align-items: center;
        
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            width: 24px;
            height: 24px;
            background-color: #ffe3e1;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;
