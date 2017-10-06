import { createStore, applyMiddleware, compose } from "redux";

import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./modules";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

// enable devTools extension if it's installed in browser
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension || null;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
