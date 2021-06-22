import { RestaurantsGrid } from "@eachbase/fragments";
import { Fragment, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { CONSTANTS } from "@eachbase/constants";
import { Category, MenuItems, Menus } from "@eachbase/fragments";
import { useDispatch } from "react-redux";
import { restaurantsActions } from "@eachbase/store";
import { restaurantActions } from "@eachbase/store";

const Restaurant = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  useEffect(() => {
    dispatch(restaurantActions.getRestaurantById(restaurantId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantId]);
  return null;
};

export const Restaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantsActions.getRestaurants());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <RestaurantsGrid />
      <Route
        path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.MENUS}
        component={Restaurant}
      />
      <Switch>
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.MENU_ITEMS}
          component={MenuItems}
        />
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.CATEGORIES}
          component={Category}
        />
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.MENUS}
          component={Menus}
        />
      </Switch>
    </Fragment>
  );
};
