import React, { Fragment } from "react";
import { items } from "../components/data/Productos";
import { useNavigate } from "react-router-dom";
import "../components/Items/Item.css";

const Retro = () => {
  const retroItems = items.filter((item) => item.categoria === "Retro");
  const navigate = useNavigate();

  return (
    <Fragment>
      <h1 className="tituloprimary">Retro</h1>
      <div className="cards-container">
        {retroItems.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <div key={item.id}>{item.name}</div>
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
    </Fragment>
  );
};

export default Retro;
