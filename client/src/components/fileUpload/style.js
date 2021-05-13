import styled from "styled-components";

export const Container = styled.div`
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
    .file-preview {
      margin: 10px;
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      background-position: center;
      background-size: cover;
      border-radius: 15px;
      .remove {
        background-size: white;
        position: absolute;
        left: 85%;
        color: #007aff;
        background-color: white;
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
