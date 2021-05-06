import { memo, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { Icon } from "../../../components";
import { SVGNames } from "../../../contexts/constants";

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
            <Icon name={SVGNames.user} />
            {user.fullName}
            <Icon name={SVGNames.arrowDown} />
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
