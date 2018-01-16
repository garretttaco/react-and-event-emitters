import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import GlobalRedirect from "./GlobalRedirect";
import GlobalModal from "./GlobalModal";
import { PageOne, PageTwo } from "./PagesExample";
import ModalExample from "./ModalExample";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalRedirect />
          <GlobalModal />
          <Route path="/:appType/1" component={PageOne} />
          <Route path="/:appType/2" component={PageTwo} />
          <Route path="/:appType/modal" component={ModalExample} />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
