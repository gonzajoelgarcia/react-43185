import React from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* imagenes */
import imagenFondo from "./assets/background.jpg";
import imagen1 from "./assets/imagen1.png";
import imagen2 from "./assets/imagen2.png";
import imagen3 from "./assets/imagen3.png";
import imagen4 from "./assets/imagen4.png";
import imagen5 from "./assets/imagen5.png";
import imagen6 from "./assets/imagen6.png";
import imagen7 from "./assets/imagen7.png";
import imagen8 from "./assets/imagen8.png";
import imagen9 from "./assets/imagen9.png";
import imagen10 from "./assets/imagen10.png";
import logo from "./assets/logo192.png";

function App() {
  const contenido = [
    {
      titulo: "Boca Juniors Titular 2002",
      descripcion: "$25.000",
      imagen: imagen1,
    },
    {
      titulo: "Francia Titular 2006",
      descripcion: "$25.000",
      imagen: imagen2,
    },
    {
      titulo: "Real Madrid Titular 2006/07",
      descripcion: "$25.000",
      imagen: imagen3,
    },
    {
      titulo: "Lazio Visitante 2000/01",
      descripcion: "$25.000",
      imagen: imagen4,
    },
    {
      titulo: "M. United Titular 1992/93",
      descripcion: "$25.000",
      imagen: imagen5,
    },
    {
      titulo: "Lazio Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen6,
    },
    {
      titulo: "Arsenal Titular 2022/23",
      descripcion: "$28.000",
      imagen: imagen7,
    },
    {
      titulo: "Barcelona Titular 2022/23",
      descripcion: "$26.500",
      imagen: imagen8,
    },
    {
      titulo: "Japón Especial 2023",
      descripcion: "$32.000",
      imagen: imagen9,
    },
    {
      titulo: "Corinthians 3ra 2022/23",
      descripcion: "$26.500",
      imagen: imagen10,
    },
  ];

  return (
    <div className="App" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <Navbar navbarLogo={logo} />
      <ItemListContainer greeting={"Bienvenido a FUT"} />
      <div className="card-container">
        <div className="card-container">
          {contenido.map((camiseta, index) => (
            <Card
              key={index}
              titulo={camiseta.titulo}
              descripcion={camiseta.descripcion}
              imagen={camiseta.imagen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
