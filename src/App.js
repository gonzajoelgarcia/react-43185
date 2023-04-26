import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const contenido = [
    {
      titulo: "Boca Juniors Parmalat 1996",
      descripcion: "Camiseta Retro",
      imagen:
        "https://d22fxaf9t8d39k.cloudfront.net/d6dcc7e687209748caedb283b7fb4587dcebd910918f058bedfc4791d518378a1866.jpeg",
    },
    {
      titulo: "Francia Zidane 2000",
      descripcion: "Camiseta Retro",
      imagen:
        "https://d22fxaf9t8d39k.cloudfront.net/5959630ac33cbdc2038fbad5f8149d89852da3cf6930431338980f7445de7d311866.jpeg",
    },
  ];
  return (
    <div className="App">
      <Navbar navbarLogo={"FUT"} />
      <ItemListContainer greeting={"Bienvenido a FUT"} />;
      {contenido.map((camiseta, index) => (
        <Card
          key={index}
          titulo={camiseta.titulo}
          descripcion={camiseta.descripcion}
          imagen={camiseta.imagen}
        />
      ))}
    </div>
  );
}

export default App;
