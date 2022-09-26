import React from "react";
import { MuiBreadcrumbs } from "@eachbase/components";
import { StyledRestaurantMenus } from "./style";
import { menusBreadcrumbs } from "./constants";

export const RestaurantMenusFragment = () => {
  return (
    <>
      <MuiBreadcrumbs breadcrumbs={menusBreadcrumbs} />
      <StyledRestaurantMenus>RestaurantMenus</StyledRestaurantMenus>
    </>
  );
};
