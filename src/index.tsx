import React from "react";
import { render } from "react-dom";
import StoreContext from "storeon/react/context";
import App from "./App";
import { store } from "./store";

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
