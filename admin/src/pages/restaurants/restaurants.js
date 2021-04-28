import { RestaurantsGrid } from "@eachbase/fragments";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { CONSTANTS } from "@eachbase/constants";
import { Category, CategoryItems, Menu } from "@eachbase/fragments";

export const Restaurants = () => {
  return (
    <Fragment>
      <RestaurantsGrid />
      <Switch>
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.CATEGORY_ITEMS}
          component={CategoryItems}
        />
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.CATEGORIES}
          component={Category}
        />
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.MENUS}
          component={Menu}
        />
      </Switch>
    </Fragment>
  );
};
