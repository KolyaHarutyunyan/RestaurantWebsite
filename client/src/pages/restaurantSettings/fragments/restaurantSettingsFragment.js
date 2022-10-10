import { MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import { settingsBreadcrumbs, restaurantSettingsTabs } from "./constants";
import { StyledRestaurantSettings } from "./style";
import { Images } from "@eachbase/theme/images";

export const RestaurantSettingsFragment = () => (
  <StyledRestaurantSettings>
    <div className="settings-header">
      <MuiBreadcrumbs breadcrumbs={settingsBreadcrumbs} />
      <a href="#" className="qr-code-link" download={false}>
        <Images.DownloadIcon /> Download QR Code{" "}
      </a>
    </div>
    <MuiTabs tabs={restaurantSettingsTabs} />
  </StyledRestaurantSettings>
);
