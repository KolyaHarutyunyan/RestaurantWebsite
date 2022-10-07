import { SettingsTabItem, SocialAccountsTabItem } from "./core";

export const settingsBreadcrumbs = [
  { path: "/settings", text: "Restuarant Settings" },
];

export const restaurantSettingsTabs = [
  { label: "Settings", item: <SettingsTabItem /> },
  { label: "Social Accounts", item: <SocialAccountsTabItem /> },
];
