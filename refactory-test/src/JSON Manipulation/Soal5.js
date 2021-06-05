import React, { Fragment } from "react";
import { data } from "./data";

const Soal5 = () => {
  return (
    <Fragment>
      <h3>5. Find all items with brown color</h3>
      {data
        .filter((item) => item.tags === "brown")
        .map((a, index) => (
          <div>{index + 1 + ". " + a.name}</div>
        ))}
    </Fragment>
  );
};
export default Soal5;
