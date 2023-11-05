import React, { useState } from "react";

const Buscador = ({ buscarColaboradores, limpiarBusqueda }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleBuscar = () => {
    buscarColaboradores(busqueda);
  };

  const handleLimpiar = () => {
    setBusqueda(""); // Limpia la búsqueda
    limpiarBusqueda(); // Esta función debe estar definida en el componente padre para restablecer la búsqueda.
  };

  return (
    <div>
    <h2>Buscar Colaboradores</h2>
    <div className="input-group mb-3">
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleInputChange}
        className="form-control"
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleBuscar}>
          Buscar
        </button>
        <button className="btn btn-secondary" onClick={handleLimpiar}>
          Limpiar
        </button>
      </div>
    </div>
  </div>
  );
};

export default Buscador;
