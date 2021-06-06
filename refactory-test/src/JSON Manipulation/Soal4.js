import React, { Fragment } from "react";
import { data } from "./data";

const Soal4 = () => {
  return (
    <Fragment>
      <h3>4. Find all items were purchased on 16 januari 2020</h3>
      {/* {data
        .filter((item) => item.purchased_on === "")
        .map((a, index) => (
          <div>{index + 1 + ". " + a.name}</div>
        ))} */}
    </Fragment>
  );
};
export default Soal4;
