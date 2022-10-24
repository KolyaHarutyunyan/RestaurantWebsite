import { useEffect } from "react";
import { Loader, MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import { menusActions, useSagaStore } from "@eachbase/store";
import { menuSettingsTabs, menusSettingsBreadcrumbs } from "./constants";
import { StyledMenusSettings } from "./style";
import { useRouter } from "next/router";
import { FindLoad } from "@eachbase/utils";

export const MenusSettingsFragment = () => {
  const restaurantMenu = useSagaStore(menusActions.getBusinessMenu);
  const router = useRouter();
  const menuId = router.query.menuId;

  useEffect(() => {
    if (menuId) {
      restaurantMenu.dispatch(menuId);
    }
  }, [menuId]);

  return (
    <StyledMenusSettings>
      <MuiBreadcrumbs breadcrumbs={menusSettingsBreadcrumbs} />
      <MuiTabs tabs={menuSettingsTabs} />
    </StyledMenusSettings>
  );
};
