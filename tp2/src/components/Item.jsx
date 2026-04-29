function Item({
  item,
  eliminarItem,
  toggleComprado,
  editarItem,
  incrementarCantidad,
  disminuirCantidad,
}) {
  return (
    <li className={item.comprado ? "comprado" : ""}>
      <span>{item.nombre}</span>

      <div className="cantidad">
        <button
          onClick={() => disminuirCantidad(item.id)}
          disabled={item.comprado}
        >
          -
        </button>

        <span>{item.cantidad}</span>

        <button
          onClick={() => incrementarCantidad(item.id)}
          disabled={item.comprado}
        >
          +
        </button>
      </div>

      <div className="acciones">
        <button onClick={() => toggleComprado(item.id)}>✔</button>
        <button onClick={() => editarItem(item)}>✏</button>
        <button onClick={() => eliminarItem(item.id)}>❌</button>
      </div>
    </li>
  );
}

export default Item;