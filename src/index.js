import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import "./input.css";
const root = document.querySelector("#root");

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,

  root
);
