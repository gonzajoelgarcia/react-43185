import React from "react";

const Card = (props) => {
  const { imagen, titulo, descripcion } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <button href="#" className="btn btn-primary">
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default Card;
