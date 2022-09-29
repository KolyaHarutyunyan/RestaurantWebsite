import React, { useContext } from "react";
import { addClosed, Drawer, DrawerFooter, DrawerHeader } from "./constants";
import { Images } from "@eachbase/theme/images";
import { SideSheetsDrawerContext } from "@eachbase/utils";
import { SideSheetsList } from "./core/sideSheetsList";
import Router from "next/router";
import { StyledSideSheetsDrawer } from "./style";

export const SideSheetsDrawer = () => {
  const { open, toggleDrawer } = useContext(SideSheetsDrawerContext);

  return (
    <StyledSideSheetsDrawer>
      <div className={addClosed("collapse", !open)} onClick={toggleDrawer}>
        {open ? <Images.CollapseButton /> : <Images.CollapseButton />}
      </div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div
            className="restaurant-profile-box"
            onClick={() => Router.push("/restaurant")}
          >
            <Images.RestaurantProfile className="restaurant-profile" />
            <span className={addClosed("restaurant-name", !open)}>
              Restaurant Name
            </span>
            <Images.Arrow className={addClosed("arrow", !open)} />
          </div>
        </DrawerHeader>
        <SideSheetsList />
        <DrawerFooter>
          <Images.MenumangoLogo className={addClosed("menumangoLogo", !open)} />
        </DrawerFooter>
      </Drawer>
    </StyledSideSheetsDrawer>
  );
};
