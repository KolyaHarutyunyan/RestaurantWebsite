import { forwardRef, useContext, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { CreateMenu, useHeaderStyles } from ".";
import { SVGNames } from "@eachbase/constants";
import { Icon } from "@eachbase/components";
import { ModalContext } from "@eachbase/context";

export const Navbar = forwardRef(
  ({ toggle, isMobile, user, status, onRequestToClose }, toggleRef) => {
    const classes = useHeaderStyles();

    const { openModal } = useContext(ModalContext);
    const openAuth = () => openModal.auth();
    const openAvatar = () => openModal.avatar({ type: "userAvatar" });
    useEffect(() => {
      const documentClickHandler = ({ path }) => {
        const conditionalClassList = ["user-toggle-button"];
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
            className={`${classes.toggleMenuBtn} ${status ? " opened" : ""}`}
          >
            <Icon name={SVGNames.ToggleMenu} />
          </Button>
        ) : (
          <div className={classes.menu}>
            <div className={classes.listItem}>
              {user.fullName ? (
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
                    <Icon name={SVGNames.User} />
                    {user.fullName}
                    <Icon name={SVGNames.DownArrow} />
                  </Button>
                </Box>
              ) : (
                <>
                  <Button
                    className={`${classes.button} red`}
                    onClick={openAuth}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
            <div className={classes.listItem}>
              <CreateMenu
                isAuthed={!!user.fullName}
                className={classes.button}
                handlerClick={openAuth}
              />
            </div>
          </div>
        )}
      </Box>
    );
  }
);
