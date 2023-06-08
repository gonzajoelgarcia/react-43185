import React, { Fragment } from "react";
import Item from "../components/Items/Item";
import "./ItemDetails.css";
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

const Home = () => {
  const items = [
    {
      id: "1",
      titulo: "Boca Juniors 2002",
      descripcion: "$25.000",
      imagen: imagen1,
      categoria: "Retro",
    },
    {
      id: "2",
      titulo: "Francia Titular 2006",
      descripcion: "$25.000",
      imagen: imagen2,
      categoria: "Retro",
    },
    {
      id: "3",
      titulo: "Real Madrid 2006",
      descripcion: "$25.000",
      imagen: imagen3,
      categoria: "Retro",
    },
    {
      id: "4",
      titulo: "Lazio 2000/01",
      descripcion: "$25.000",
      imagen: imagen4,
      categoria: "Retro",
    },
    {
      id: "5",
      titulo: "M. United Titular 1992/93",
      descripcion: "$25.000",
      imagen: imagen5,
      categoria: "Retro",
    },
    {
      id: "6",
      titulo: "Lazio Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen6,
      categoria: "Temporada 22/23",
    },
    {
      id: "7",
      titulo: "Arsenal Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen7,
      categoria: "Temporada 22/23",
    },
    {
      id: "8",
      titulo: "Barcelona 2022/23",
      descripcion: "$26.500",
      imagen: imagen8,
      categoria: "Temporada 22/23",
    },
    {
      id: "9",
      titulo: "Japón Especial 2023",
      descripcion: "$32.000",
      imagen: imagen9,
      categoria: "Temporada 22/23",
    },
    {
      id: "10",
      titulo: "Corinthians 3ra 2022/23",
      descripcion: "$26.500",
      imagen: imagen10,
      categoria: "Temporada 22/23",
    },
  ];

  return (
    <Fragment>
      <h1 className="tituloprimary">Bievenidos a FUT</h1>
      <div className="items-container">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
