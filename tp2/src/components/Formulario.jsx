import { useState, useEffect } from "react";

function Formulario({ agregarOEditar, editandoId, items }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    if (editandoId !== null) {
      const item = items.find((i) => i.id === editandoId);
      if (item) {
        setNombre(item.nombre);
        setCantidad(item.cantidad);
      }
    }
  }, [editandoId, items]);

  const handleSubmit = () => {
    if (nombre.trim() === "" || cantidad <= 0) {
      alert("El producto debe tener un nombre \nLa cantidad no debe ser menor a 0");
      return;
    }

    agregarOEditar(nombre, cantidad);

    setNombre("");
    setCantidad("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editandoId !== null ? "Actualizar" : "Agregar"}
      </button>
    </div>
  );
}

export default Formulario;