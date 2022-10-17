import styled from "styled-components";
import { colors } from "@eachbase/theme";
import { Drawer } from "@material-ui/core";

export const StyledProfileHeader = styled.div`
  position: relative;
  max-width: 100vw;
  width: 100%;
  padding: 0px 25px;
  min-height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.white};
  .notification {
    margin-right: 16px;
    cursor: pointer;
  }
  .avatar {
    cursor: pointer;
  }
`;

export const StyledAccountDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    opacity: 0 !important;
  }
  .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight.MuiPaper-elevation16 {
    top: 64px;
    right: 40px;
    max-width: 379px;
    width: 100%;
    height: auto;
    overflow-y: unset;
    border-radius: 8px;
  }
`;
