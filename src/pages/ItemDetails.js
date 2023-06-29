import React, { useState, useEffect, useMemo, useContext } from "react";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemDetails.css";
import { CartContext } from "../pages/CartProvider";
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

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/MiLista");
  };

  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const items = useMemo(
    () => [
      {
        id: "1",
        titulo: "Boca Juniors 2002",
        descripcion: "$25000",
        imagen: imagen1,
        categoria: "Retro",
      },
      {
        id: "2",
        titulo: "Francia Titular 2006",
        descripcion: "$25000",
        imagen: imagen2,
        categoria: "Retro",
      },
      {
        id: "3",
        titulo: "Real Madrid 2006/07",
        descripcion: "$25000",
        imagen: imagen3,
        categoria: "Retro",
      },
      {
        id: "4",
        titulo: "Lazio Visitante 2000/01",
        descripcion: "$25000",
        imagen: imagen4,
        categoria: "Retro",
      },
      {
        id: "5",
        titulo: "M. United Titular 1992/93",
        descripcion: "$25000",
        imagen: imagen5,
        categoria: "Retro",
      },
      {
        id: "6",
        titulo: "Lazio Titular 2022/23",
        descripcion: "$28000",
        imagen: imagen6,
        categoria: "Temporada",
      },
      {
        id: "7",
        titulo: "Arsenal Titular 2022/23",
        descripcion: "$28000",
        imagen: imagen7,
        categoria: "Temporada",
      },
      {
        id: "8",
        titulo: "Barcelona 2022/23",
        descripcion: "$26500",
        imagen: imagen8,
        categoria: "Temporada",
      },
      {
        id: "9",
        titulo: "Japón Especial 2023",
        descripcion: "$32000",
        imagen: imagen9,
        categoria: "Temporada",
      },
      {
        id: "10",
        titulo: "Corinthians 3ra 2022/23",
        descripcion: "$26500",
        imagen: imagen10,
        categoria: "Temporada",
      },
    ],
    []
  );

  useEffect(() => {
    const filter = items.find((item) => item.id === id);
    if (filter) {
      setItem(filter);
      setLoading(false);
    } else {
      navigate("/");
    }
  }, [id, items, navigate]);

  return (
    <Fragment>
      {loading ? (
        <div className="manshega">
          <h1>Cargando producto...</h1>
        </div>
      ) : (
        <div>
          {item ? (
            <div className="item-details-container">
              <div className="images">
                <img
                  className="images"
                  src={item.imagen}
                  alt="imagen-de-producto"
                />
              </div>
              <div className="show-buttons">
                <div className="uno"></div>
                <div className="dos"></div>
                <div className="tres"></div>
                <div className="cuatro"></div>
              </div>
              <p className="pickfut">elegí el tamaño</p>
              <div className="tamaños">
                <div className="tamaño">5</div>
                <div className="tamaño">6</div>
                <div className="tamaño">7</div>
                <div className="tamaño">8</div>
                <div className="tamaño">9</div>
                <div className="tamaño">10</div>
                <div className="tamaño">11</div>
                <div className="tamaño">12</div>
              </div>
              <div className="producto-fut">
                <p>CAMISETAS FUT</p>
                <h1>{item.titulo}</h1>
                <h2>{item.descripcion}</h2>
                <p className="desc">
                  Camisetas de alta calidad, al mejor precio, con envío gratis a
                  su hogar.
                </p>
                <p>El id: {item.id}</p>
                <div className="buttons">
                  <button onClick={() => handleAddToCart(item)}>
                    Agregar al carrito
                  </button>
                  <button onClick={() => navigate("/MiLista")} className="like">
                    <span>♥</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h1>Producto no encontrado</h1>
          )}
          <div className="button-container">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-secundary"
              style={{
                borderRadius: "5px",
                padding: "10px 20px",
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            >
              VOLVER ATRÁS
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetails;
