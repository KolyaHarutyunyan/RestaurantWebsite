import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Theme } from "@eachbase/theme";
import { CONSTANTS } from "@eachbase/constants";
import { Board, Login } from "@eachbase/pages";
function App() {
  return (
    <Fragment>
      <Theme />
      <Switch>
        <Route path={CONSTANTS.BROWSER_HISTORY_PATHS.LOGIN} component={Login} />
        <Route path={CONSTANTS.BROWSER_HISTORY_PATHS.BASE} component={Board} />
      </Switch>
    </Fragment>
  );
}

export default App;
