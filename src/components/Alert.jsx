import React from "react";

const Alert = ({ mensaje, tipo }) => {
  // Mapea el tipo de alerta a una clase de Bootstrap
  const alertClass = `alert alert-${tipo}`;

  return (
    <div className={alertClass} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;