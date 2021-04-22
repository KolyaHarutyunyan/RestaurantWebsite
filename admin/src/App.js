import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { BoardLayout } from "@eachbase/fragments";
import { Theme } from "@eachbase/theme";

import { Restaurants } from "@eachbase/pages";

function App() {
  return (
    <Fragment>
      <Theme />
      <BoardLayout>
        <Switch>
          <Route path="/" component={Restaurants} />
        </Switch>
      </BoardLayout>
    </Fragment>
  );
}

export default App;
