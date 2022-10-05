import { useState } from "react";
import { MuiBreadcrumbs } from "@eachbase/components";
import { settingsBreadcrumbs, a11yProps, TabPanel } from "./constants";
import { StyledRestaurantSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SettingsTabItem, SocialAccountsTabItem } from "./core";

export const RestaurantSettingsFragment = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <StyledRestaurantSettings>
      <div className="settings-header">
        <MuiBreadcrumbs breadcrumbs={settingsBreadcrumbs} />
        <a href="#" className="qr-code-link" download={false}>
          <Images.DownloadIcon /> Download QR Code{" "}
        </a>
      </div>
      <Box className="tabs-box">
        <Box className="tabs-wrapper">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="tab" label="Settings" {...a11yProps(0)} />
            <Tab className="tab" label="Social Accounts" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SettingsTabItem />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SocialAccountsTabItem />
        </TabPanel>
      </Box>
    </StyledRestaurantSettings>
  );
};
