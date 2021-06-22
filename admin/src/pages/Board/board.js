import { BoardLayout } from "@eachbase/fragments";
import { Switch, Route } from "react-router-dom";
import { RestaurantsPage } from "@eachbase/fragments";
import { CONSTANTS } from "@eachbase/constants";

export const Board = () => {
  return (
    <BoardLayout>
      <Switch>
        <Route
          path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.BASE}
          component={RestaurantsPage}
        />
      </Switch>
    </BoardLayout>
  );
};
