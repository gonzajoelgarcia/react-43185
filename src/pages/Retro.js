import React from "react";
import { items } from "../components/data/Productos";
import { useNavigate } from "react-router-dom";

const Retro = () => {
  const retroItems = items.filter((item) => item.categoria === "Retro");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Retro</h1>
      {retroItems.map((item) => (
        <div className="card d-flex" style={{ width: "18rem" }}>
          <div className="contenedor">
            <div className="imagen">
              <img src={item.imagen} className="card-img-top" alt="" />
            </div>
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 className="card-title">{item.titulo}</h3>
              <p className="card-text">{item.descripcion}</p>
              <div className="card-number-container"></div>
              <button
                onClick={() => navigate(`/Item/${item.id}`)}
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
      ))}
    </div>
  );
};

export default Retro;
