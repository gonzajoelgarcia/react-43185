import React from "react";
import "./CardList.css";

const Card = (props) => {
  const { imagen, titulo, descripcion } = props;

  return (
    <html>
      <body>
        <div className="card" style={{ width: "18rem" }}>
          <div class="contenedor">
            <div class="imagen">
              <img src={imagen} className="card-img-top" alt=""></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{descripcion}</p>
              <button href="#" className="btn btn-primary">
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Card;
