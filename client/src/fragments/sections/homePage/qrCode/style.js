import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  margin-bottom: 172px;
  .line:first-child {
    width: 15%;
    background-color: ${colors.primary};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .image {
    margin: 0 10px;
  }
  .line:last-child {
    display: flex;
    align-items: center;
    padding-left: 60px;
    @media (max-width: 1280px) {
      padding-left: 10px;
    }
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 75%;
    background-color: ${colors.primary};
  }
`;
