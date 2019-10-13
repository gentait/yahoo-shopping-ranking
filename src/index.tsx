import React from "react";
import ReactDOM from "react-dom";
import configureStore, { history } from "./configureStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
//Storeの生成
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
