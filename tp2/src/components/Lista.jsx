import Item from "./Item";

function Lista({
  items,
  eliminarItem,
  toggleComprado,
  editarItem,
  incrementarCantidad,
  disminuirCantidad,
}) {
  return (
    <ul className="lista">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          eliminarItem={eliminarItem}
          toggleComprado={toggleComprado}
          editarItem={editarItem}
          incrementarCantidad={incrementarCantidad}
          disminuirCantidad={disminuirCantidad}
        />
      ))}
    </ul>
  );
}

export default Lista;