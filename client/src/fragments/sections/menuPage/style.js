import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 160px;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 78px;
    @media (max-width: 1280px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }
  .grid:nth-child(2) {
    @media (min-width: 320px) {
      margin-top: 80px;
    }
    @media (min-width: 768px) {
      margin-top: 128px;
    }
    @media (min-width: 1280px) {
      margin-top: 128px;
    }
    @media (min-width: 1920px) {
      margin-top: 160px;
    }
  }
  .no-items {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 767px) {
      margin-top: 0;
    }
    
    margin-top: 128px;

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
