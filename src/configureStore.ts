import { createHashHistory } from "history";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import * as reducers from "./reducers";

export const history = createHashHistory();

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...(reducers as any),
      router: connectRouter(history)
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
  return store;
}
