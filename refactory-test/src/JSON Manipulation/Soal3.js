import React, { Fragment } from "react";
import { data } from "./data";

const Soal3 = () => {
  return (
    <Fragment>
      <h3>3. Find all the furniture</h3>
      {data
        .filter((item) => item.type === "furniture")
        .map((a, index) => (
          <div>{index + 1 + ". " + a.name}</div>
        ))}
    </Fragment>
  );
};
export default Soal3;
