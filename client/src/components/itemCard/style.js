import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
  box-shadow: 0px 2px 6px #0000002a;
  @media (max-width: 767px) {
    height: 109px;
  }
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background: white;
  .image {
    margin-right: 16px;
    border-radius: 8px;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
    width: 89px;
    height: 89px;
    @media (min-width: 767px) {
      width: 118px;
      height: 118px;
    }
    svg {
      transform: scale(0.5);
    }
  }
  .poor {
    opacity: 0.6;
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .price{
    font-size: 18px;
    font-family: Open Sans, sans-serif;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .poor-option{
    color:#54C762;
    font-size: 14px;
    font-family: Open Sans, sans-serif;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .upper {
      display: flex;
      justify-content: space-between;
      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
    .item-title{
      font-size: 18px;
      font-family: Open Sans, sans-serif;
      margin-bottom: 16px;
      
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
    .under {
      display: flex;
      justify-content: space-between;
      margin-top: 11px;
      .actions {
        display: flex;
        justify-content: flex-end;
        //flex: 0 0 145px;
       
        button {
          display: flex;
          align-items: center;
          outline: 0;
          
          p{
            display: block;
            @media (max-width: 767px) {
             display: none;
            }
            font-family: Open Sans, sans-serif;
            font-size: 14px;
            margin-right: 24px;

            @media (max-width: 767px) {
              margin-right: 2px;
            }
          }
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            width: 24px;
            height: 24px;
            border-radius: 4px;
            flex: 0 0 24px;
            margin-right: 0;
            margin-left: 16px;
            @media (min-width: 767px) {
              margin-right: 8px;
              margin-left: 0;
            }
          }
          &.edit {
            color: ${colors.action};
            .icon {
              background-color: ${colors.action}1A;
            }
          }
          &.delete {
            color: ${colors.primary};
            .icon {
              background-color: ${colors.primary}1A;
            }
          }
        }
      }
    }
  }
`;
