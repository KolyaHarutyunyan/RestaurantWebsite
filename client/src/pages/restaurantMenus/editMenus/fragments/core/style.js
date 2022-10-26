import styled from "styled-components";
import { Drawer } from "@material-ui/core";

export const StyledCategoryTabItem = styled.section`
  width: 100%;
  min-height: 456px;
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
`;

export const StyledMenuDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    opacity: 0 !important;
  }
  .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight.MuiPaper-elevation16 {
    top: 56px;
    right: 0px;
    max-width: 516px;
    width: 100%;
    height: calc(100vh - 56px);
    overflow-y: unset;
  }
`;
