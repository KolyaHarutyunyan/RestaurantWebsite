import styled from "styled-components";

export const Container = styled.div`
  .g-title {
    text-align: center;
    margin-bottom: 72px;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-of-type(1) {
      gap: 80px;
      margin-bottom: 160px;
      .image {
        max-width: 800px;
        min-height: 446px;
      }
      ul {
        li {
          p:first-child {
            margin-bottom: 8px;
          }
          margin-bottom: 24px;
        }
      }
    }
    &:nth-of-type(2) {
      gap: 80px;
      margin-bottom: 160px;
      ul {
        max-width: 465px;
        li {
          display: flex;
          gap: 40px;
          margin-bottom: 24px;
          .checkmark {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            flex: 0 0 45px;
            height: 45px;
            background-color: #54c762;
            color: white;
            border-radius: 50%;
          }
          .content {
            p:first-child {
              margin-bottom: 8px;
            }
          }
        }
      }
      .image {
        max-width: 800px;
        height: 446px;
      }
    }
  }
`;
