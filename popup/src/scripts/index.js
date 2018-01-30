import React from "react";
import { render } from "react-dom";

import { Store } from "react-chrome-redux";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
