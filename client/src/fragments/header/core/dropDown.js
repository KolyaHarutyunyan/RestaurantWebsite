import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./style";

let user = {
  fullName: "Vzgo Vzgov",
};

export const DropDown = ({ isAuthed, handlerClick }) => {
  let classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      {isAuthed ? (
        <>
          <Button
            onClick={() => setOpenPopup(!openPopup)}
            className={classes.userButton + (openPopup ? " rotated" : "")}
          >
            ICON
            {user.fullName}
            ICON
          </Button>
          <Box className={classes.toggleMenu + (openPopup ? " opened" : "")}>
            <ul></ul>
          </Box>
        </>
      ) : (
        <>
          <Button className={`${classes.button} red`} onClick={handlerClick}>
            Sign In
          </Button>
        </>
      )}
    </>
  );
};
