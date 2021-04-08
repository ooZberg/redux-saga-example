import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route exact path="/"><Main/></Route>
        </Switch>
      </div>
    )
  }
}

export default App;












