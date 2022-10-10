import { MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import { menuSettingsTabs, menusSettingsBreadcrumbs } from "./constants";
import { StyledMenusSettings } from "./style";

export const MenusSettingsFragment = () => (
  <StyledMenusSettings>
    <div className="settings-header">
      <MuiBreadcrumbs breadcrumbs={menusSettingsBreadcrumbs} />
    </div>
    <MuiTabs tabs={menuSettingsTabs} />
  </StyledMenusSettings>
);
