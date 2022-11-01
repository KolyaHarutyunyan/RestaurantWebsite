import { useEffect, useState } from "react";
import { Images } from "@eachbase/theme/images";
import { StyledDrawer, StyledProfileHeader } from "./style";
import { AccountSettings } from "./core/accountSettings";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { useWidth } from "@eachbase/utils";
import { SideSheetsDrawer } from "../sideSheetsDrawer/sideSheetsDrawer";

export const ProfileHeader = () => {
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const userInfo =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("menuUser"));

  const width = useWidth();
  const _accountAnchor = width <= 767 ? "bottom" : "right";
  const _menuAnchor = "left";

  const [accountDrawerPosition, setAccountDrawerPosition] = useState({
    [_accountAnchor]: false,
  });
  const [menuDrawerPosition, setMenuDrawerPosition] = useState({
    [_menuAnchor]: false,
  });

  useEffect(() => {
    getBusinessesSaga.dispatch();
  }, []);

  const toggleAccountDrawer = (anchor, open) => {
    setAccountDrawerPosition({ ...accountDrawerPosition, [anchor]: open });
  };
  const toggleMenuDrawer = (anchor, open) => {
    setMenuDrawerPosition({ ...menuDrawerPosition, [anchor]: open });
  };

  const closeAccountDrawer = () => toggleAccountDrawer(_accountAnchor, false);
  const closeMenuDrawer = () => toggleMenuDrawer(_menuAnchor, false);

  const handleMenuHamburgerClick = () => {
    toggleMenuDrawer(_menuAnchor, !menuDrawerPosition[_menuAnchor]);
  };

  const handleNotificationClick = () => {
    alert("Notifications");
  };

  const handleAvatarClick = () => {
    toggleAccountDrawer(_accountAnchor, true);
  };

  return (
    <>
      <StyledProfileHeader>
        <div className="menu-hamburger-box" onClick={handleMenuHamburgerClick}>
          {menuDrawerPosition[_menuAnchor] === true ? (
            <Images.CloseMenuHamburger />
          ) : (
            <Images.MenuHamburger />
          )}
        </div>
        <div className="notifications-account-box">
          <div className="notification" onClick={handleNotificationClick}>
            <Images.Notification />
          </div>
          <div className="avatar" onClick={handleAvatarClick}>
            <Images.Avatar />
          </div>
        </div>
      </StyledProfileHeader>
      <StyledDrawer
        anchor={_accountAnchor}
        open={accountDrawerPosition[_accountAnchor]}
        onClose={closeAccountDrawer}
      >
        <AccountSettings account={userInfo} handleClose={closeAccountDrawer} />
      </StyledDrawer>
      <StyledDrawer
        style={{ backgroundColor: "#26262680" }}
        anchor={_menuAnchor}
        open={menuDrawerPosition[_menuAnchor]}
        onClose={closeMenuDrawer}
      >
        <SideSheetsDrawer handleClose={closeMenuDrawer} />
      </StyledDrawer>
    </>
  );
};
