import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import { AnyAction, Store } from "redux";

interface Props {
  store: Store<any, AnyAction>;
}
const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);
export default Root;
