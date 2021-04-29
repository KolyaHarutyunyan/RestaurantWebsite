import styled from "styled-components";
import { breakPoints } from "@eachbase/theme";
export const Container = styled.div`
  height: 100%;
  .restaurant {
    display: flex;
    align-items: center;
    height: 60px;
    overflow: hidden;
    padding: 0 15px;
    .name {
      font-weight: bold;
    }
    img {
      margin-right: 15px;
      width: 45px;
      height: 45px;
    }
  }
  .menus {
    height: calc(100% - 105px);
    .list-title {
      font-weight: bold;
      padding: 15px 15px;
    }
    .list {
      height: 100%;
      overflow: auto;
      padding: 10px 15px 0px 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media ${breakPoints.mobile} {
        grid-template-columns: 1fr;
      }
      gap: 15px;
    }
  }
`;
