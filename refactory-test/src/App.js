import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllJawaban from "./JSON Manipulation/AllJawaban";
import MainPage from "./FullStackJs/MainPage";
import Login from "./FullStackJs/Login";
import Register from "./FullStackJs/Register";
import "./App.css";

function App() {
  return (
    <Fragment>
      {/* <AllJawaban /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/soal-json-manipulation" exact component={AllJawaban} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
