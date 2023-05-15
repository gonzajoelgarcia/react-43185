import React, { useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const item = (props) => {
  const { id, imagen, titulo, descripcion } = props;
  const navigate = useNavigate();

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
          <div className="card-number-container"></div>
          <ItemCount />
          <button
            onClick={() => navigate(`/Card/${id}`)}
            className="btn btn-primary"
            style={{
              borderRadius: "5px",
              padding: "10px 20px",
              marginTop: "10px",
            }}
          >
            VER MÁS
          </button>
        </div>
      </div>
    </div>
  );
};

export default item;
