import React from "react";
import { MuiBreadcrumbs } from "@eachbase/components";
import { settingsBreadcrumbs } from "./constants";
import { StyledRestaurantSettings } from "./style";

export const RestaurantSettingsFragment = () => {
  return (
    <>
      <MuiBreadcrumbs breadcrumbs={settingsBreadcrumbs} />
      <StyledRestaurantSettings>RestaurantSettings</StyledRestaurantSettings>
    </>
  );
};
