import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./index.css";
import EmitterApp from "./emitter/App";
import ReduxApp from "./redux/App";
import { injectGlobal } from "styled-components";
import Header from "./components/Header";
import Button from "./components/Button";

injectGlobal`
  @font-face {
    font-family: 'Space Mono, monospace';
    src: url('https://fonts.googleapis.com/css?family=Space+Mono');
  }
`;

const RedirectToExample = withRouter(({ history, to, toText }) => (
  <Button onClick={() => history.push(to)}>{toText}</Button>
));

ReactDOM.render(
  <Router>
    <Fragment>
      <Route path="/" component={Header} />
      <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <RedirectToExample to="/emitter/1" toText="Emitter example" />
            <RedirectToExample to="/redux/1" toText="Redux example" />
          </Fragment>
        )}
      />
      <Route path="/emitter" component={EmitterApp} />
      <Route path="/redux" component={ReduxApp} />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
