import React, { useState } from "react";

const Formulario = ({ agregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nuevoColaborador.nombre &&
      nuevoColaborador.correo &&
      nuevoColaborador.edad &&
      nuevoColaborador.cargo &&
      nuevoColaborador.telefono
    ) {
      agregarColaborador(nuevoColaborador);
      setNuevoColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoColaborador.nombre}
            onChange={handleInputChange}
            className="form-control"
            required // Campo requerido
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            value={nuevoColaborador.correo}
            onChange={handleInputChange}
            className="form-control"
            required // Campo requerido
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="edad"
            placeholder="Edad"
            value={nuevoColaborador.edad}
            onChange={handleInputChange}
            className="form-control"
            required // Campo requerido
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={nuevoColaborador.cargo}
            onChange={handleInputChange}
            className="form-control"
            required // Campo requerido
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={nuevoColaborador.telefono}
            onChange={handleInputChange}
            className="form-control"
            required // Campo requerido
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;