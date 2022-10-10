import { MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import { menuSettingsTabs, menusSettingsBreadcrumbs } from "./constants";
import { StyledMenusSettings } from "./style";

export const MenusSettingsFragment = () => (
  <StyledMenusSettings>
    <MuiBreadcrumbs breadcrumbs={menusSettingsBreadcrumbs} />
    <MuiTabs tabs={menuSettingsTabs} />
  </StyledMenusSettings>
);
