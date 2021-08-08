import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 64px);
  background: transparent
    linear-gradient(180deg, #0000001a 0%, #ffffff1a 0%, #54545433 100%) 0% 0%
    no-repeat padding-box;
  .wrapper {
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    .title {
      text-align: center;
    }
    .description {
      text-align: center;
    }
    button {
      max-width: 230px;
    }
    img {
      max-width: 720px;
      margin: 0 auto;
    }
  }
`;
