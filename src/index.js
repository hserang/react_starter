import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./redux/store";
import App from "./containers/app";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

const target = document.querySelector("#root");

// Provier passes the state to all child components
// no need to manually pass parent state in props (FTW!)
// this is accomplished calling connect() method in our components
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
