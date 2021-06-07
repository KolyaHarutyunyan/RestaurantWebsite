import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  border: 1px dashed
    ${({ isDragActive }) => (isDragActive ? "#007aff" : "#2b273c80")};
  border-radius: 8px;
  padding: 16px;
  .uploaded-files {
    flex: 1;
    text-align: center;
    .file-mock-preview {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background: #0000001a;
      margin: 10px;
      svg {
        width: 42px;
        height: 42px;
      }
    }
    .file-preview {
      vertical-align: top;
      display: inline-flex;
      cursor: pointer;
      margin: 10px;
      position: relative;
      width: 80px;
      height: 80px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      border: 3px solid white;
      &.main {
        box-shadow: 0px 0px 0px 3px ${colors.action};
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      .active {
        margin-right: 5px;
        color: #007aff;
      }
    }
    .acceptable-file-size-noth {
      text-align: center;
      font-size: 10px;
      color: #2b273c80;
    }
  }
`;
