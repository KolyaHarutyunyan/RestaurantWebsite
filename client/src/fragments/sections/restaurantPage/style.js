import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 5px 0;
    .qr-button {
      display: flex;
      align-items: center;
      color: ${colors.typography.active} !important;
      svg {
        transform: scale(1.4);
        margin-right: 5px;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    gap: 20px;
    .business-card,
    .extra-details-card {
      box-shadow: 1px 1px 14px #d6d6d6;
      margin: 10px 0;
      border-radius: 5px;
      padding: 20px;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
        }
        .action {
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          display: flex;
          align-items: center;
          .icon {
            flex: 0 0 24px;
            display: flex;
            align-items: center;
            margin-right: 8px;
          }
          &.hourse-menu-toggle {
            cursor: pointer;
          }
        }
      }
    }
    .menu-list {
      grid-column: 1/3;
      @media only screen and (max-width: 768px) {
        grid-column: auto;
      }
      .list {
        padding: 0px 2px 15px 0px;
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        @media only screen and (max-width: 1600px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media only screen and (max-width: 1280px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media only screen and (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        gap: 25px;
        & > * {
          height: 260px;
        }
        .add-card {
          box-shadow: 0px 0px 6px #0000001a;
          border-radius: 16px;
          .image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 190px;
            background-color: #0000001a;
            border-radius: 16px 16px 0 0;
            svg {
              width: 100%;
              transform: scale(0.3);
              @media only screen and (max-width: 768px) {
                transform: scale(0.2);
              }
            }
          }
          .footer {
            height: 70px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 0 16px 16px;
            button {
              display: flex;
              align-items: center;
              color: #007aff;
            }
          }
        }
      }
    }
  }
`;

export const HourseMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
  div {
    & > p {
      flex: 0 0 40px;
    }
  }
  & > div {
    display: flex;
    gap: 5px;
    p {
      font-weight: bold;
    }
  }
  ul {
    li {
      &.danger {
        color: ${colors.primary};
      }
      display: flex;
      gap: 5px;
      .title {
        color: ${colors.text};
        font-weight: bold;
      }
      .value {
        display: flex;
        flex-direction: column;
        &.closed {
          color: ${colors.primary};
        }
      }
    }
  }
`;
