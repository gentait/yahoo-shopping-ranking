import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      {/* 総合ランキングのルート */}
      <Switch>
        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={({ match }) => <Ranking categoryId={match.params.id} />}
        />
      </Switch>
    </div>
  );
};

export default App;
