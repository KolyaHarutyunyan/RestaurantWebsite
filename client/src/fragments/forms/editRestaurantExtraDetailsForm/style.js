import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  transition: 0.3s opacity ease-in-out, 0.1s max-height ease-in-out;
  ${({ isOpen }) =>
    isOpen
      ? `
      max-height: 360px;
      opacity: 1;
    `
      : `
      max-height: 0px;
      opacity: 0;
    `}
  & > li {
    display: flex;
    border-radius: 8px;
    background: #007aff1a 0% 0% no-repeat padding-box;
    display: flex;
    padding: 14px;
    justify-content: space-between;
    & > p {
      flex: 0 0 40px;
    }
    & > .switch {
      flex: 0 0 35px;
    }
    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      li {
        display: flex;
        gap: 10px;
        .actions {
          display: flex;
          gap: 5px;
          button {
            width: 20px;
            height: 20px;
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
`;

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
    }
    .hours-operations {
      margin-top: 10px;
      .toggle-button {
        display: flex;
        align-items: center;
        svg {
          transform: rotate(180deg);
          transition: transform 0.3s ease-in-out;
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
