import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { addClosed, Drawer, DrawerFooter, DrawerHeader } from "./constants";
import { Images } from "@eachbase/theme/images";
import { SideSheetsDrawerContext } from "@eachbase/utils";
import { SideSheetsList } from "./core/sideSheetsList";
import Router from "next/router";

export const SideSheetsDrawer = ({ children }) => {
  const { open, toggleDrawer } = useContext(SideSheetsDrawerContext);
  const [currentPage, setCurrentPage] = useState({});

  return (
    <Box className="side-sheets-drawer-box">
      <div className={addClosed("collapse", !open)} onClick={toggleDrawer}>
        {open ? <Images.CollapseButton /> : <Images.CollapseButtonClosed />}
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
        <SideSheetsList triggerPage={(page) => setCurrentPage(page)} />
        <DrawerFooter>
          <Images.MenumangoLogo className={addClosed("menumangoLogo", !open)} />
        </DrawerFooter>
      </Drawer>
      <div className="main-content">
        <div className="page-title-box">
          <h2 className="page-title">{currentPage.text}</h2>
          {/* {currentPage.item && ( */}
          <>
            <Images.BreadcrumbArrow className="breadcrumb-arrow" />
            <h2 className="page-title subtitle">page subtitle</h2>
          </>
          {/* )} */}
        </div>
        {children}
      </div>
    </Box>
  );
};
