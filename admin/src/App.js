import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { BoardLayout } from "@eachbase/fragments";
import { Theme } from "@eachbase/theme";
import { CONSTANTS } from "@eachbase/constants";
import { Restaurants } from "@eachbase/pages";

function App() {
  return (
    <Fragment>
      <Theme />
      <BoardLayout>
        <Switch>
          <Route
            path={CONSTANTS.BROWSER_HISTORY_PATHS.RESTAURANTS.BASE}
            component={Restaurants}
          />
        </Switch>
      </BoardLayout>
    </Fragment>
  );
}

export default App;
