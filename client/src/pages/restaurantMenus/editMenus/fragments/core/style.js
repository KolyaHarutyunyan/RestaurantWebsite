import styled from "styled-components";
import { Drawer } from "@material-ui/core";

export const StyledCategoryTabItem = styled.section`
  width: 100%;
  min-height: 72.5vh;
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  .category-card {
    @media (max-width: 1279px) {
      display: block;
      &.hidden {
        display: none;
      }
    }
  }
  .product-card {
    @media (max-width: 1279px) {
      display: none;
      &.shown {
        display: block;
        margin-top: -30px;
      }
    }
    @media (max-width: 767px) {
      &.shown {
        margin-top: -56px;
      }
    }
  }
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
