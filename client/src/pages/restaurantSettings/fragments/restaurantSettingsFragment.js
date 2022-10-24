import { Loader, MuiTabs } from "@eachbase/components";
import { restaurantSettingsTabs } from "./constants";
import { StyledRestaurantSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import { FindLoad } from "@eachbase/utils";

export const RestaurantSettingsFragment = () => {
  const loader = FindLoad("GET_BUSINESS_BY_ID")

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <StyledRestaurantSettings>
      <div className="settings-header">
        <h2 className="settings-title">Restuarant Settings</h2>
        <a href="#" className="qr-code-link" download={false}>
          <Images.DownloadIcon /> Download QR Code{" "}
        </a>
      </div>
      <MuiTabs tabs={restaurantSettingsTabs} />
    </StyledRestaurantSettings>
  );
};
