import { HashRouter, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id" component={Detail} />
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
