import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login.jsx";
import Secret from "./components/Secret.jsx";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
        </Switch>
      </div>
    );
  }
}

export default App;
