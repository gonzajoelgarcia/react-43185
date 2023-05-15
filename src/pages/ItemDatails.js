import React, { useState } from "react";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
/* imagenes */
import imagen1 from "../assets/imagen1.png";
import imagen2 from "../assets/imagen2.png";
import imagen3 from "../assets/imagen3.png";
import imagen4 from "../assets/imagen4.png";
import imagen5 from "../assets/imagen5.png";
import imagen6 from "../assets/imagen6.png";
import imagen7 from "../assets/imagen7.png";
import imagen8 from "../assets/imagen8.png";
import imagen9 from "../assets/imagen9.png";
import imagen10 from "../assets/imagen10.png";

const ItemDatails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Card, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const item = [
    {
      id: "1",
      titulo: "Boca Juniors Titular 2002",
      descripcion: "$25.000",
      imagen: imagen1,
    },
    {
      id: "2",
      titulo: "Francia Titular 2006",
      descripcion: "$25.000",
      imagen: imagen2,
    },
    {
      id: "3",
      titulo: "Real Madrid Titular 2006/07",
      descripcion: "$25.000",
      imagen: imagen3,
    },
    {
      id: "4",
      titulo: "Lazio Visitante 2000/01",
      descripcion: "$25.000",
      imagen: imagen4,
    },
    {
      id: "5",
      titulo: "M. United Titular 1992/93",
      descripcion: "$25.000",
      imagen: imagen5,
    },
    {
      id: "6",
      titulo: "Lazio Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen6,
    },
    {
      id: "7",
      titulo: "Arsenal Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen7,
    },
    {
      id: "8",
      titulo: "Barcelona Titular 2022/23",
      descripcion: "$26.500",
      imagen: imagen8,
    },
    {
      id: "9",
      titulo: "Japón Especial 2023",
      descripcion: "$32.000",
      imagen: imagen9,
    },
    {
      id: "10",
      titulo: "Corinthians 3ra 2022/23",
      descripcion: "$26.500",
      imagen: imagen10,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const filter = item.find((item) => item.id === id);
      setItem(filter);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loading && <h1>Cargando...</h1>}
      {Card && !loading && (
        <div>
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          <img alt="">{item.imagen}</img>
          <h3>{item.id}</h3>
        </div>
      )}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-primary"
        style={{
          borderRadius: "5px",
          padding: "10px 20px",
          marginTop: "10px",
        }}
      >
        VOLVER ATRÁS
      </button>
      <div>ItemDatails</div>;
    </Fragment>
  );
};

export default ItemDatails;
