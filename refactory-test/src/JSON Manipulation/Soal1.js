import React, { Fragment } from "react";
import { data } from "./data";

const Soal1 = () => {
  return (
    <Fragment>
      <h1>JSON Manipulation</h1>
      <h3>1. Find item in the meeting room</h3>
      {data
        .filter((item) => item.placement.name === "Meeting Room")
        .map((a, index) => (
          <div>{index + 1 + ". " + a.name}</div>
        ))}
    </Fragment>
  );
};
export default Soal1;
