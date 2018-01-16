import React, { Component } from "react";
import { Route } from "react-router-dom";
import Provider from "./Provider";
import GlobalEmitterRedirect from "./GlobalEmitterRedirect";
import { PageOne, PageTwo } from "./PagesExample";
import ModalExample from "./ModalExample";
import GlobalModal from "./GlobalModal";

class App extends Component {
  render() {
    return (
      <Provider>
        <GlobalEmitterRedirect />
        <GlobalModal />
        <Route path="/:appType/1" component={PageOne} />
        <Route path="/:appType/2" component={PageTwo} />
        <Route path="/:appType/modal" component={ModalExample} />
      </Provider>
    );
  }
}

export default App;
