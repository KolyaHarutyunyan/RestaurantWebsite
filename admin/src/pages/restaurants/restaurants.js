import { RestaurantsGrid } from "@eachbase/fragments";
import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";
import { CONSTANTS } from "@eachbase/constants";
import { Category, CategoryItems, Menu } from "@eachbase/fragments";
import { useDispatch } from "react-redux";
import { restaurantsActions } from "@eachbase/store";
export const Restaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantsActions.getRestaurants());
  });

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
