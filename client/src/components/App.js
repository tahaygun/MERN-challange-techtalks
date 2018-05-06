import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Join from "./Join";
import Showone from "./Showone";
import Addnew from "./Addnew";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/articles/:id" component={Showone} />
          <Route exact path="/article/new" component={Addnew} />
        </Switch>
      </Router>
    );
  }
}

export default App;
