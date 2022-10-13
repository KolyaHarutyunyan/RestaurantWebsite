import { useEffect } from "react";
import { MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import { menusActions, useSagaStore } from "@eachbase/store";
import { menuSettingsTabs, menusSettingsBreadcrumbs } from "./constants";
import { StyledMenusSettings } from "./style";
import { useRouter } from "next/router";

export const MenusSettingsFragment = () => {
  const restaurantMenu = useSagaStore(menusActions.getBusinessMenu);

  const router = useRouter();

  const menuId = router.query.menuId;

  useEffect(() => {
    restaurantMenu.dispatch(menuId);
  }, [menuId]);

  return (
    <StyledMenusSettings>
      <MuiBreadcrumbs breadcrumbs={menusSettingsBreadcrumbs} />
      <MuiTabs tabs={menuSettingsTabs} />
    </StyledMenusSettings>
  );
};
