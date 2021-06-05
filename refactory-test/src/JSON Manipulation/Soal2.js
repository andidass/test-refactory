import React, { Fragment } from "react";
import { data } from "./data";

const Soal2 = () => {
  return (
    <Fragment>
      <h3>2. Find all electronic devices</h3>
      {data
        .filter((item) => item.type === "electronic")
        .map((a, index) => (
          <div>{index + 1 + ". " + a.name}</div>
        ))}
    </Fragment>
  );
};
export default Soal2;
