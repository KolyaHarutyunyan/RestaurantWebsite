import styled from "styled-components";

export const Container = styled.div`
  .select-create-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    margin: 35px 0 25px 0;
    .select-wrapper {
      flex: 1;
      margin-right: 32px;

      .css-yk16xz-control{
        min-height: 48px;
        color: #2B273C80;
        border-color: #2B273C80;
      }
      .css-1okebmr-indicatorSeparator{
        display: none;
      }
      .css-1pahdxg-control{
        min-height: 48px;
        color: #2B273C80;
        border-color: #2B273C80;
      }
    }
    button {
      flex: 0 0 140px;
    }
  }
  .delete-button{
    display: flex;
    align-items: center;
    margin-right: 20px;
    span{
      margin-right: 8px;
    }
  }
  .delete-arrow{
    display: flex;
    align-items: center;
  }
  .categories {
    flex-direction: column;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
    li {
      margin-bottom: 10px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 32px;
      box-shadow: 0px 0px 6px #0000002a;
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
