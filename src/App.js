import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const contenido = [
    {
      titulo: "Boca Juniors Titular 2002",
      descripcion: "$25.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/02/20230301_173051_0000.png",
    },
    {
      titulo: "Francia Titular 2006",
      descripcion: "$25.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/02/s-l1600-jpg.webp",
    },
    {
      titulo: "Real Madrid Titular 2006/07",
      descripcion: "$25.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/02/benzalface_8e8ea97f-bace-4310-9e7b-4f9c1b25a1e5.webp",
    },
    {
      titulo: "Lazio Visitante 2000/01",
      descripcion: "$25.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/02/3131-Editado.png",
    },
    {
      titulo: "Manchester United Titular 1992/93",
      descripcion: "$25.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2021/03/united9293.jpg",
    },
    {
      titulo: "Lazio Titular 2022/23",
      descripcion: "$28.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/03/descarga-9.webp",
    },
    {
      titulo: "Arsenal Titular 2022/23",
      descripcion: "$28.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2022/09/descarga.jfif",
    },
    {
      titulo: "FC Barcelona Titular 2022/23",
      descripcion: "$26.500",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2022/09/descarga-5.jfif",
    },
    {
      titulo: "Japón Especial 2023",
      descripcion: "$32.000",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/03/PhotoRoom_004_20230101_164504.png",
    },
    {
      titulo: "Corinthians Tercera 2022/23",
      descripcion: "$26.500",
      imagen:
        "https://mezzalacamisetas.com.ar/wp-content/uploads/2023/01/3275993394-Editado.png",
    },
  ];
  return (
    <div className="App">
      <Navbar navbarLogo={"FUT"} />
      <ItemListContainer greeting={"Bienvenido a FUT"} />
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
  );
}

export default App;
