import styled from "styled-components";

export const Container = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 160px;
    @media (max-width: 1280px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }
  .grid:last-child {
    margin-top: 50px;
  }
  .no-items {
    display: flex;
    flex-direction: column;
    gap: 24px;

    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px 0;
    opacity: 0.3;
    svg {
      color: #2b273c80;
      width: 100px;
      height: 100px;
    }
  }
`;
