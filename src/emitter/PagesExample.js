import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import ClickAndRedirect from "./ClickAndRedirect";

export const PageOne = withRouter(({ match }) => (
  <Fragment>
    <h1>Page one</h1>
    <ClickAndRedirect to={`/${match.params.appType}/2`} />
  </Fragment>
));

export const PageTwo = withRouter(({ match }) => (
  <Fragment>
    <h1>Page two</h1>
    <ClickAndRedirect to={`/${match.params.appType}/1`} />
  </Fragment>
));
