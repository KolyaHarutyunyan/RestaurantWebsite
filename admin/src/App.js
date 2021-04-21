import { Route, Switch } from "react-router-dom";
import { Board } from "@eachbase/pages";
import { Theme } from "@eachbase/theme";

function App() {
  return (
    <>
      <Theme />
      <Switch>
        <Route path="/" component={Board} />
      </Switch>
    </>
  );
}

export default App;
