import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 160px;
  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 60x;
  }
`;
