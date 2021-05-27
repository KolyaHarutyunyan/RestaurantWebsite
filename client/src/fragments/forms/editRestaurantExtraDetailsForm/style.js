import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
    }
    .hours-operations {
      margin-top: 20px;
      .toggle-button {
        display: flex;
        align-items: center;
        svg {
          transform: rotate(180deg);
          transition: transform 0.3s ease-in-out;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: 0.3s opacity ease-in-out, 0.1s height ease-in-out;
        height: 100%;
        opacity: 1;
        & > li {
          border-radius: 8px;
          background: #007aff1a 0% 0% no-repeat padding-box;
          display: flex;
          padding: 14px;
          justify-content: space-between;
          ul {
            display: flex;
            flex-direction: column;
            gap: 5px;
            li {
              display: flex;
              gap: 10px;
              .actions {
                display: flex;
                gap: 5px;
                button {
                  width: 18px;
                  height: 18px;
                  background-color: white;
                  border-radius: 50%;
                  font-weight: bold;
                  font-size: 1.1rem;
                  color: green;

                  &:last-child {
                    color: ${colors.primary};
                  }
                }
              }
            }
          }
        }
      }
      &.close {
        .toggle-button {
          svg {
            transform: rotate(0deg);
          }
        }
        .details {
          height: 0px;
          opacity: 0;
          overflow: hidden;
        }
      }
    }
  }
`;
