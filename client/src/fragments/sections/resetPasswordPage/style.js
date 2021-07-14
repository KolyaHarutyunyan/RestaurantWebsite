import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  @media only screen and (max-width: 768px) {
    max-width: 380px;
  }
  margin: 0 auto;
  padding: 60px 0;
`;
