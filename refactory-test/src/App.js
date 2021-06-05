import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Soal1 from "./JSON Manipulation/Soal1";
import Soal2 from "./JSON Manipulation/Soal2";
import Soal3 from "./JSON Manipulation/Soal3";
import Soal4 from "./JSON Manipulation/Soal4";
import Soal5 from "./JSON Manipulation/Soal5";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Soal1 />
      <Soal2 />
      <Soal3 />
      <Soal4 />
      <Soal5 />
    </Fragment>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Soal1} />
    //   </Switch>
    // </Router>
  );
}

export default App;
