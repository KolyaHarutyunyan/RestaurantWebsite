import { Style } from "./style";
import { SideBarStateContext } from "../viewPortContext";
import React, { useContext } from "react";
export const Main = ({ children }) => {
  const { sideBarIsOpen, isTablet } = useContext(SideBarStateContext);
  return (
    <React.Fragment>
      <Style.Container sideBarIsOpen={sideBarIsOpen} isTablet={isTablet}>
        {children}
      </Style.Container>
      <Style.Fade sideBarIsOpen={sideBarIsOpen} isTablet={isTablet} />
    </React.Fragment>
  );
};
