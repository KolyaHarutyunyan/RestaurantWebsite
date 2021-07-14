import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  transition: 0.3s opacity ease-in-out, 0.1s max-height ease-in-out;
  .hour-container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 15px;
    .title {
      text-align: left;
      flex: 0 0 40px;
    }
    .hour-list {
      flex: 1;
      .add-button {
        cursor: pointer;
        color: ${colors.action};
      }
    }
    .hour {
      display: flex;
      gap: 5px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      .action-container {
        .action {
          font-size: 0.9rem;
          cursor: pointer;
          color: ${colors.primary};
        }
      }
    }
    .status {
      font-size: 0.7rem;
      display: inline-flex;
      align-items: center;
      position: relative;
      top: 2px;
      label {
        margin-left: 2px;
      }
    }
  }

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
