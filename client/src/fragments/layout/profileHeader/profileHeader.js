import React, { useState } from "react";
import { Images } from "@eachbase/theme/images";
import { StyledDrawer, StyledProfileHeader } from "./style";
import { AccountSettings } from "./core/accountSettings";
import { accountSettings } from "./constants";

export const ProfileHeader = () => {
  const [drawerPosition, setDrawerPosition] = useState({ right: false });

  const toggleDrawer = (anchor, open) => {
    setDrawerPosition({ ...drawerPosition, [anchor]: open });
  };

  return (
    <>
      <StyledProfileHeader>
        <div className="notification" onClick={() => alert("Notifications")}>
          <Images.Notification />
        </div>
        <div className="avatar" onClick={() => toggleDrawer("right", true)}>
          <Images.Avatar />
        </div>
      </StyledProfileHeader>
      <StyledDrawer
        anchor={"right"}
        open={drawerPosition.right}
        onClose={() => toggleDrawer("right", false)}
      >
        <AccountSettings account={accountSettings} />
      </StyledDrawer>
    </>
  );
};
