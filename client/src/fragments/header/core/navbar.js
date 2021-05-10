import { forwardRef, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { CreateMenu, useHeaderStyles } from ".";
import { useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = forwardRef(
  ({ toggle, isMobile, user, status, onRequestToClose }, toggleRef) => {
    const classes = useHeaderStyles();
    const { open } = useModal();

    const mobileSideMenuIsOpen = status;

    useEffect(() => {
      const documentClickHandler = ({ path }) => {
        const conditionalClassList = [
          "user-toggle-button",
          "mobile-side-toggle-button",
          "toggle-header-menu",
        ];
        let classNameInList = false;
        for (const nodeElement of path) {
          if (nodeElement.classList) {
            for (const iClassName of nodeElement.classList) {
              if (!!conditionalClassList.find((i) => i === iClassName)) {
                classNameInList = true;
                break;
              }
            }
          }
        }
        if (!classNameInList) {
          onRequestToClose();
        }
      };
      window.addEventListener("click", documentClickHandler);
      return () => window.removeEventListener("click", documentClickHandler);
    }, []);

    return (
      <Box>
        {isMobile ? (
          <Button
            onClick={() => toggle()}
            className={`${classes.toggleMenuBtn} ${
              status ? " opened" : ""
            } mobile-side-toggle-button`}
          >
            {mobileSideMenuIsOpen ? <AiOutlineClose /> : <HiMenuAlt4 />}
          </Button>
        ) : (
          <div className={classes.menu}>
            <div className={classes.listItem}>
              {user ? (
                <Box className={`${classes.userButtonContainer} `}>
                  {/* WARNING: user-toggle-button className used above in pure
                  javascript part */}
                  <Button
                    ref={toggleRef}
                    onClick={() => toggle()}
                    className={`
                      ${classes.userButton} 
                      ${status ? " rotated" : ""}
                      user-toggle-button
                      `}
                  >
                    ICON
                    {user.fullName}
                    ICON
                  </Button>
                </Box>
              ) : (
                <Button
                  className={`${classes.button} red`}
                  onClick={() => open(MODAL_NAMES.SIGN_IN)}
                >
                  Sign In
                </Button>
              )}
            </div>
            <div className={classes.listItem}>
              <CreateMenu
                isAuthed={!!user}
                className={classes.button}
                handlerClick={() => open(MODAL_NAMES.SIGN_IN)}
              />
            </div>
          </div>
        )}
      </Box>
    );
  }
);
