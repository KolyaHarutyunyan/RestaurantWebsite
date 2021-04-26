import { forwardRef, memo, useContext, useRef } from "react";
import { Box, Button } from "@material-ui/core";
import { CreateMenu, useHeaderStyles } from ".";
import { SVGNames } from "@eachbase/constants";
import { Icon } from "@eachbase/components";
import { ModalContext } from "@eachbase/context";

export const Navbar = forwardRef(
  ({ toggle, isMobile, user, status }, toggleRef) => {
    const classes = useHeaderStyles();

    const { openModal } = useContext(ModalContext);
    const openAuth = () => openModal.auth();
    const openAvatar = () => openModal.avatar({ type: "userAvatar" });

    return (
      <Box>
        {isMobile ? (
          <Button
            onClick={toggle}
            className={`${classes.toggleMenuBtn} ${status ? " opened" : ""}`}
          >
            <Icon name={SVGNames.ToggleMenu} />
          </Button>
        ) : (
          <div className={classes.menu}>
            <div className={classes.listItem}>
              {user.fullName ? (
                <Box className={classes.userButtonContainer}>
                  <Button
                    ref={toggleRef}
                    onClick={toggle}
                    className={classes.userButton + (status ? " rotated" : "")}
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
