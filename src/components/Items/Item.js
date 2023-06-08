import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  const { imagen, titulo, descripcion, id } = props;
  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: "18rem" }}>
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
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">{descripcion}</p>
        <div className="card-number-container"></div>
        <button
          onClick={() => navigate(`/Item/${id}`)}
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
  );
};

export default Item;
