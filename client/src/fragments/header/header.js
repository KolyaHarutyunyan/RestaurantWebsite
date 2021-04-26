import { memo, useEffect, useRef, useState } from "react";
import { AppBar, Box } from "@material-ui/core";
import { useHeaderStyles, Logo, Menus } from "./core";
import { Navbar } from "./core/navbar";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

let mobileWidth = 768;

export const Header = () => {
  const classes = useHeaderStyles();
  const profile = useSelector((state) => state.profile);
  const collapseMenuToggleRef = useRef();
  const [openedMenu, setOpenedMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => setIsMobile(window.innerWidth < mobileWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AppBar className={classes.header}>
        <Logo className={classes.logo} />
        <Navbar
          ref={collapseMenuToggleRef}
          status={openedMenu}
          toggle={() => setOpenedMenu((current) => !current)}
          onRequestToClose={() => {
            console.log(11);
            setOpenedMenu(false);
          }}
          isMobile={isMobile}
          user={profile}
        />
      </AppBar>
      <Menus
        toggleRef={collapseMenuToggleRef}
        status={openedMenu}
        type={isMobile}
        user={profile}
      />
    </>
  );
};
