import styled from "styled-components";

export const Container = styled.div`
  .loader {
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: white;
    align-items: center;
    justify-content: center;
    color: white !important;
    transition: opacity 0.5s ease-in-out, z-index 0.5s ease-in-out;
    z-index: 10000;
    opacity: 1;
    &.hide {
      z-index: -10000;
      opacity: 0;
    }
    p {
      position: relative;
      top: 65px;
      font-size: 2rem;
      color: white;
    }
    svg {
      @media (max-width: 768px) {
        transform: scale(2);
      }
      transform: scale(4);
    }
  }
`;
