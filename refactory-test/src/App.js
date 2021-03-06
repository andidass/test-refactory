import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllJawaban from "./JSON Manipulation/AllJawaban";
import Login from "./FullStackJs/Login";
import Register from "./FullStackJs/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/soal-json-manipulation" exact component={AllJawaban} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
