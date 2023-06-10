import React, { Fragment, useContext } from "react";
import { useState } from "react";

const ItemCount = () => {
  const [number, setNumber] = useState(1);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <Fragment>
      <div className="card-buttons">
        <button onClick={decrementNumber} style={{ marginRight: "5px" }}>
          -
        </button>
        <h2 className="card-number">{number}</h2>
        <button onClick={incrementNumber} style={{ marginRight: "5px" }}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
