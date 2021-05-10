import { Fragment, useRef, useState } from "react";
import { AppBar } from "@material-ui/core";
import { useHeaderStyles, Logo, Menus } from "./core";
import { Navbar } from "./core/navbar";
import { useSelector } from "react-redux";
import useMedia from "use-media";
export const Header = () => {
  const isMobile = useMedia({ maxWidth: 768 });
  const classes = useHeaderStyles();
  const profile = useSelector((state) => state.profile || null);
  const collapseMenuToggleRef = useRef();
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <Fragment>
      <AppBar className={classes.header}>
        <Logo className={classes.logo} />
        <Navbar
          ref={collapseMenuToggleRef}
          status={openedMenu}
          toggle={() => setOpenedMenu((current) => !current)}
          onRequestToClose={() => setOpenedMenu(false)}
          isMobile={isMobile}
          user={profile}
        />
      </AppBar>
      <div className="header-space" className={classes.headerSpace} />
      <Menus
        toggleRef={collapseMenuToggleRef}
        status={openedMenu}
        type={isMobile}
        user={profile}
      />
    </Fragment>
  );
};
