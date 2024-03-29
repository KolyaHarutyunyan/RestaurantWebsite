import { Style } from "./style";
import { ViewPortLayoutContext } from "@eachbase/context";
import { useContext, Fragment } from "react";

export const Content = ({ children }) => {
  const { sideBarIsOpen, isTablet } = useContext(ViewPortLayoutContext);
  return (
    <Fragment>
      <Style.Container sideBarIsOpen={sideBarIsOpen} isTablet={isTablet}>
        <div className="wrapper">{children}</div>
      </Style.Container>
      <Style.Fade sideBarIsOpen={sideBarIsOpen} isTablet={isTablet} />
    </Fragment>
  );
};
