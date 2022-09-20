import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { addClosed, Drawer, DrawerFooter, DrawerHeader } from "./constants";
import { Images } from "@eachbase/theme/images";
import { SideSheetsDrawerContext } from "@eachbase/utils";
import { SideSheetsList } from "./core/sideSheetsList";

export const SideSheetsDrawer = () => {
  const { open, toggleDrawer } = useContext(SideSheetsDrawerContext);

  return (
    <Box className="side-sheets-drawer-box">
      <div className={addClosed("collapse", !open)} onClick={toggleDrawer}>
        {open ? <Images.CollapseButton /> : <Images.CollapseButtonClosed />}
      </div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="restaurant-profile-box">
            <Images.RestaurantProfile className="restaurant-profile" />
            <span className={addClosed("restaurant-name", !open)}>
              Restuarant Name
            </span>
            <Images.Arrow className={addClosed("arrow", !open)} />
          </div>
        </DrawerHeader>
        <SideSheetsList />
        <DrawerFooter>
          <Images.MenumangoLogo className={addClosed("menumangoLogo", !open)} />
        </DrawerFooter>
      </Drawer>
    </Box>
  );
};
