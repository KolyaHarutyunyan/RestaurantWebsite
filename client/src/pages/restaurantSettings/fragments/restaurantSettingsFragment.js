import { Loader, MuiTabs } from "@eachbase/components";
import { restaurantSettingsTabs } from "./constants";
import { StyledRestaurantSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import { FindLoad } from "@eachbase/utils";
import { useSelector } from "react-redux";

export const RestaurantSettingsFragment = () => {
  const restaurant = useSelector((state) => state.businesses);
  const loader = FindLoad("GET_BUSINESS_BY_ID");

  if (loader?.length) {
    return <Loader />;
  }

  const download = () => {
    saveAs(restaurant?.qr?.url, 'image.jpg')
  }

  return (
    <StyledRestaurantSettings>
      <div className="settings-header">
        <h2 className="settings-title">Restuarant Settings</h2>
        <a onClick={download} href="#" className="qr-code-link" download={false}>
          <Images.DownloadIcon /> Download QR Code{" "}
        </a>
      </div>
      <MuiTabs
        tabs={restaurantSettingsTabs}
        className={"restaurant-settings-tab"}
      />
    </StyledRestaurantSettings>
  );
};
