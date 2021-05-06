import { Box, Button } from "@material-ui/core";
import { pageLinks, useHeaderStyles, CreateMenu } from ".";
import Link from "next/link";
import { Icon } from "@eachbase/components";
import { CONSTANTS } from "@eachbase/constants";
import { useEffect, useState } from "react";

export const Menus = ({ status, type, user, toggleRef }) => {
  const classes = useHeaderStyles();
  const [xAxisOffset, setXAxisOffset] = useState(0);
  const className =
    (type ? classes.toggleMenu : classes.dropdownMenu) +
    (status ? " opened" : "");
  useEffect(() => {
    if (status && !type) {
      setXAxisOffset(toggleRef.current.offsetParent.offsetLeft);
    }
  }, [status, type]);
  useEffect(() => {
    const windowResizeObserver = () => {
      if (toggleRef.current) {
        const xAxisOffset = toggleRef.current.offsetParent.offsetLeft;
        setXAxisOffset(xAxisOffset);
      } else {
        setXAxisOffset(0);
      }
    };

    window.addEventListener("resize", windowResizeObserver);
    return () => window.removeEventListener("resize", windowResizeObserver);
  }, []);

  const hoverableMenuItemClassName = `${classes.dropdownMenuItem} ${classes.dropdownMenuItemHover} link-item`;
  return (
    <Box
      /* WARNING: toggle-header-menu className will be used in navbar component so dont remove it  */
      className={`${className} toggle-header-menu`}
      style={{
        [xAxisOffset ? "left" : "right"]: `${xAxisOffset}px`,
      }}
    >
      {!user && <Button className={classes.button + " red"}>Sign In</Button>}
      {user && type && (
        <CreateMenu isAuthed={user.id} className={classes.button} />
      )}
      {user && (
        <>
          {type && (
            <Box className={classes.dropdownMenuItem}>
              <Icon name={CONSTANTS.SVGNames.User} />
              {user.fullName}
            </Box>
          )}
          {pageLinks.map((item, i) => (
            <Link href={item.url} key={i}>
              <a className={hoverableMenuItemClassName}>
                <Icon name={item.icon} />
                {item.title}
              </a>
            </Link>
          ))}
          <button className={hoverableMenuItemClassName}>
            <Icon name={CONSTANTS.SVGNames.LogOut} />
            Sign Up
          </button>
        </>
      )}
    </Box>
  );
};
