import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [items, setItems] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const agregarOEditar = (nombre, cantidad) => {
    if (editandoId !== null) {
      setItems(
        items.map((item) =>
          item.id === editandoId
            ? { ...item, nombre, cantidad }
            : item
        )
      );
      setEditandoId(null);
    } else {
      const nuevoItem = {
        id: Date.now(),
        nombre,
        cantidad,
        comprado: false,
      };
      setItems([...items, nuevoItem]);
    }
  };

  const eliminarItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComprado = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado }
          : item
      )
    );
  };

  const editarItem = (item) => {
    setEditandoId(item.id);
  };

  const incrementarCantidad = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && !item.comprado
          ? { ...item, cantidad: Number(item.cantidad) + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.cantidad > 1 && !item.comprado
          ? { ...item, cantidad: Number(item.cantidad) - 1 }
          : item
      )
    );
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>

      <Formulario
        agregarOEditar={agregarOEditar}
        editandoId={editandoId}
        items={items}
      />

      <Lista
        items={items}
        eliminarItem={eliminarItem}
        toggleComprado={toggleComprado}
        editarItem={editarItem}
        incrementarCantidad={incrementarCantidad}
        disminuirCantidad={disminuirCantidad}
      />
    </div>
  );
}

export default App;