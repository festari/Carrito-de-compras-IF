import { useState } from "react";
import "./App.css";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import groceries from "./data/groceries";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [mensajes, setMensajes] = useState([]);

  function ponerProductosAlCarrito(producto) {
    setProductosCarrito((verProductos) => {
      const productoExistente = verProductos.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        if (
          (producto.name === "Papel Higiénico" ||
            producto.name === "Alcohol en Gel") &&
          productoExistente.cantidad >= 3
        ) {
          const mensaje = `🚫 Lo sentimos. No es posible comprar más unidades. Otras familias también necesitan abastecerse de ${producto.name}`;
          if (!mensajes.includes(mensaje)) {
            setMensajes([mensaje]);
          }
          return verProductos;
        }
        setMensajes([]);
        return verProductos.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        setMensajes([]);
        return [...verProductos, { ...producto, cantidad: 1 }];
      }
    });
  }

  function sacarProductoDelCarrito(productoId) {
    setProductosCarrito((verProductos) => {
      return verProductos
        .map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0);
    });
  }

  return (
    <div className="container">
      <div className="lista-productos">
        <ListaProductos
          productos={groceries}
          sumarProductosAlCarrito={ponerProductosAlCarrito}
        />
      </div>
      <div className="carrito">
        <Carrito
          productosCarrito={productosCarrito}
          sacarProductoDelCarrito={sacarProductoDelCarrito}
          mensajes={mensajes}
        />
      </div>
    </div>
  );
}

export default App;
