import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import projects from "./projects/reducer";

const logger =
  process.env.NODE_ENV === "development" && createLogger({ collapsed: true });

const dragonboatMiddleware = [thunk];

const middleware = [...dragonboatMiddleware, logger].filter(Boolean);

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  combineReducers({
    projects,
  }),
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
