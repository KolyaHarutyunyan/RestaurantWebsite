import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  min-height: ${({ limit }) => (limit === 0 ? "80px" : "200px")};
  background-color: ${({ limit }) =>
    limit === 0 ? colors.primary : colors.white};
  ${({ isDragActive }) => (isDragActive ? colors.action : colors.notSet)};
  max-width: 584px;
  width: 100%;
  border: 1px dashed ${colors.gray};
  padding: 24px 0px 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  .uploaded-files-many {
    display: flex;
    flex-wrap: wrap;
  }
  .limit-reached-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 80px;
  }
  .uploaded-files {
    flex: 1;
    text-align: center;
    .file-mock-preview {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        width: 82px;
        height: 82px;
      }
      width: 100px;
      height: 100px;
      background: #0000002a;
      margin: 10px;
      &.big-one {
        @media (max-width: 767px) {
          width: 82px;
          height: 82px;
        }
        width: 100px;
        height: 100px;
      }
      svg {
        width: 42px;
        height: 42px;
      }
    }
    .file-mock {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        width: 82px;
        height: 82px;
      }
      width: 100px;
      height: 100px;
      background: #0000002a;
      margin: 10px;
      &.big-one {
        @media (max-width: 767px) {
          width: 82px;
          height: 82px;
        }
        width: 100px;
        height: 100px;
      }
      svg {
        width: 62px;
        height: 62px;
      }
    }
    .file-preview {
      vertical-align: top;
      display: inline-flex;
      cursor: pointer;
      margin: 10px;
      position: relative;
      width: 82px;
      height: 82px;
      &.big-one {
        width: 100px;
        height: 100px;
        .remove {
          left: 77% !important;
        }
      }
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      border: 3px solid white;
      &.main {
        @media (max-width: 767px) {
          width: 82px;
          height: 82px;
        }
        width: 100px;
        height: 100px;
      }
      .remove {
        position: absolute;
        left: 72%;
        top: 8%;
        color: #ffffff;
        background-color: black;
        border-radius: 50%;
        height: 16px;
        svg {
          transform: scale(2);
        }
      }
    }
  }
  .content-container {
    flex: 0 0 40px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    color: #2b273c;
    font-weight: 600;
    .title {
      margin: 16px auto 8px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
      @media (max-width: 768px) {
        font-size: 14px;
      }
      .active {
        margin: 0px 6px;
        color: ${colors.yellowOrange};
        cursor: pointer;
      }
    }
    .acceptable-file-size-noth {
      max-width: 240px;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      color: ${colors.gray};
      margin: 0px auto;
    }
  }
`;
