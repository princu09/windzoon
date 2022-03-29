import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataState from "./context/dataState";
import Chart from "./component/Chart";

function App() {
  return (
    <>
      <DataState>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Chart">
              <Chart/>
            </Route>
          </Switch>
        </Router>
      </DataState>
    </>
  );
}

export default App;
