import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 60px 0;
  text-align: center;
  padding: 24px 16px;
  border-radius: 32px;
  background: white;

  @media (min-width: 320px) {
    padding: 24px 16px;
  }
  @media (min-width: 768px) {
    padding: 48px 32px;
  }
  
  .enter-your-password{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: ${colors.subBlack};
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  
  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
