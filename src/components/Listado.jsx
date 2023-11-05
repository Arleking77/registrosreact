import React from "react";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  const confirmarEliminar = (id) => {
    const confirmacion = window.confirm("¿Realmente desea eliminar este colaborador?");
    if (confirmacion) {
      eliminarColaborador(id);
    }
  };

  return (
    <div>
      <h2>Listado de Colaboradores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => confirmarEliminar(colaborador.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
