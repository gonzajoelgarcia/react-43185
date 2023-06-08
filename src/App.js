import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo192.png";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MiLista from "./pages/MiLista";
import Retro from "./pages/Retro";
import Temporada from "./pages/Temporada";
import ItemDetails from "./pages/ItemDetails";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

const [setProductos] = useState([]);
const [setLoading] = useState(false);
useEffect(() => {
  const getProductos = async () => {
    setLoading(true);
    try {
      const col = collection(db, "productos");
      const data = await getDocs(col);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    getProductos();
  };
}, []); */
function App() {
  return (
    <BrowserRouter>
      <Navbar navbarLogo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<MiLista />} />
        <Route path="/Retro" element={<Retro />} />
        <Route path="/Temporada" element={<Temporada />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
