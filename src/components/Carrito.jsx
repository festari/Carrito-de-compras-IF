function Carrito({ productosCarrito, sacarProductoDelCarrito, mensajes }) {
  const totalProductos = productosCarrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );
  const totalPrecio = productosCarrito.reduce(
    (total, producto) => total + producto.cantidad * producto.unitPrice,
    0
  );

  return (
    <>
      <div className="col">
        <h2>
          <img src="src\img\carrito-de-compras.png" alt="" />
          &nbsp; Carrito de compras:
        </h2>
        {productosCarrito.length === 0 ? (
          <p className="list-group-item">
            👈Por favor, seleccione uno o mas productos al carrito. 🛒
          </p>
        ) : (
          <>
            <ul className="list-group">
              <p className="list-group-item">
                Total de productos: {totalProductos}
              </p>
            </ul>
            <ul className="list-group">
              {productosCarrito.map((producto) => (
                <button
                  key={producto.id}
                  type="button"
                  className="list-group-item list-group-item-action btn btn-light"
                  onClick={() => sacarProductoDelCarrito(producto.id)}
                >
                  <i class="bi bi-dash-circle"></i>
                  {""}  {producto.name} - Cant: {producto.cantidad} - ($
                  {producto.unitPrice.toFixed(2)} c/u)
                </button>
              ))}
            </ul>
            <br />
            <ul className="list-group">
              <li className="list-group-item list-group-item-success">
                Total a pagar: ${totalPrecio.toFixed(2)} 💸
              </li>
            </ul>
            {mensajes.length > 0 && (
              <ul className="list-group mt-3">
                {mensajes.map((mensaje, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-danger"
                  >
                    {mensaje}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Carrito;
