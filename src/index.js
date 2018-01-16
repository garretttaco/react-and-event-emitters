import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import EmitterApp from "./emitter/App";
import ReduxApp from "./redux/App";
import { injectGlobal } from "styled-components";
import Header from "./components/Header";

injectGlobal`
  @font-face {
    font-family: 'Space Mono, monospace';
    src: url('https://fonts.googleapis.com/css?family=Space+Mono');
  }
`;

ReactDOM.render(
  <Router>
    <Fragment>
      <Route path="/" component={Header} />
      <Route path="/emitter" component={EmitterApp} />
      <Route path="/redux" component={ReduxApp} />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
