import { useEffect, useState } from "react";
import { Images } from "@eachbase/theme/images";
import { StyledAccountDrawer, StyledProfileHeader } from "./style";
import { AccountSettings } from "./core/accountSettings";
import { accountSettings } from "./constants";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { useWidth } from "@eachbase/utils";

export const ProfileHeader = () => {
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const userInfo = typeof window !== "undefined" && JSON.parse(localStorage.getItem("menuUser"));

  const width = useWidth();
  const _anchor = width <= 610 ? "bottom" : "right";

  const [drawerPosition, setDrawerPosition] = useState({ [_anchor]: false });

  useEffect(() => {
    getBusinessesSaga.dispatch();
  }, []);

  const toggleDrawer = (anchor, open) => {
    setDrawerPosition({ ...drawerPosition, [anchor]: open });
  };

  return (
    <>
      <StyledProfileHeader>
        <div className="notification" onClick={() => alert("Notifications")}>
          <Images.Notification />
        </div>
        <div className="avatar" onClick={() => toggleDrawer(_anchor, true)}>
          <Images.Avatar />
        </div>
      </StyledProfileHeader>
      <StyledAccountDrawer
        anchor={_anchor}
        open={drawerPosition[_anchor]}
        onClose={() => toggleDrawer(_anchor, false)}
      >
        <AccountSettings
          account={userInfo}
          handleClose={() => toggleDrawer(_anchor, false)}
        />
      </StyledAccountDrawer>
    </>
  );
};
