import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  </React.StrictMode>
);