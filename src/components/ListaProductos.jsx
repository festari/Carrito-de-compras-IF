function ListaProductos({ productos, sumarProductosAlCarrito }) {
  return (
    <>
      <div className="col">
        <h2>
          <img src="src\img\productos.png" alt="" />
          {""}&nbsp; Productos Disponibles:
        </h2>
        <div class="list-group">
          {productos.map((producto) => (
            <button
              key={producto.id}
              type="button"
              className="list-group-item list-group-item-action btn btn-light"
              onClick={() => sumarProductosAlCarrito(producto)}
            >
              <i class="bi bi-plus-circle"></i>  {producto.name} - $
              {producto.unitPrice.toFixed(2)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProductos;
