import React, { useState } from "react";
import "./CardList.css";

const Card = (props) => {
  const { imagen, titulo, descripcion } = props;
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="contenedor">
        <div className="imagen">
          <img src={imagen} className="card-img-top" alt="" />
        </div>
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <div className="card-number-container">
            <div className="card-buttons">
              <button onClick={decrementNumber} style={{ marginRight: "5px" }}>
                -
              </button>
              <h2 className="card-number">{number}</h2>
              <button onClick={incrementNumber} style={{ marginRight: "5px" }}>
                +
              </button>
            </div>
          </div>
          <button
            href="#"
            className="btn btn-primary"
            style={{
              borderRadius: "5px",
              padding: "10px 20px",
              marginTop: "10px",
            }}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
