import styled from "styled-components";
import { media } from "./media";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${media.forMobile`
    height: calc(100% - 60px )
  `};
  overflow: auto;
  .page-content {
    min-height: calc(100vh  - 64px);
  }
`;
