import React, { useContext } from "react";
import { addClosed, Drawer, DrawerFooter, DrawerHeader } from "./constants";
import { Images } from "@eachbase/theme/images";
import { getLimitedVal, SideSheetsDrawerContext } from "@eachbase/utils";
import { SideSheetsList } from "./core/sideSheetsList";
import { StyledSideSheetsDrawer } from "./style";
import { useSelector } from "react-redux";

export const SideSheetsDrawer = ({ handleClose }) => {
  const { open, toggleDrawer } = useContext(SideSheetsDrawerContext);

  const restaurant = useSelector((state) => state.businesses);

  return (
    <StyledSideSheetsDrawer>
      <div className={addClosed("collapse", !open)} onClick={toggleDrawer}>
        {open ? <Images.CollapseButton /> : <Images.CollapseButtonClosed />}
      </div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className={addClosed("restaurant-profile-box", !open)}>
            {restaurant?.logo ? (
              <div className="restaurant-profile">
                <img src={restaurant.logo?.url} alt="logo" />
              </div>
            ) : (
              <Images.RestaurantProfile className="restaurant-profile" />
            )}
            <span className={addClosed("restaurant-name", !open)}>
              {getLimitedVal(restaurant?.name, 15)}
            </span>
            {/*<Images.Arrow className={addClosed("arrow", !open)} />*/}
          </div>
        </DrawerHeader>
        <SideSheetsList handleMenuClose={handleClose} />
        <DrawerFooter>
          <Images.MenumangoLogo className={addClosed("menumangoLogo", !open)} />
        </DrawerFooter>
      </Drawer>
    </StyledSideSheetsDrawer>
  );
};
