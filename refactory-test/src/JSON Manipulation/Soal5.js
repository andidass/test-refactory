import React, { Fragment, useEffect, useState } from "react";
import { data } from "./data";

const Soal5 = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(
      data.map((item) => item.tags.filter((b) => b === "brown").length > 0)
    );
  }, [setArr]);

  return (
    <Fragment>
      <h3>5. Find all items with brown color</h3>
      <div>
        {arr
          .map(
            (e, index) =>
              e && (
                <div>
                  {index + 1}. {data[index].name}
                </div>
              )
          )
          .filter((brownItem) => brownItem !== false)}
      </div>
    </Fragment>
  );
};
export default Soal5;
