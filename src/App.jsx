import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./colaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresOriginal] = useState(BaseColaboradores); 
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador) {
      setColaboradores([...colaboradores, { id: Date.now().toString(), ...nuevoColaborador }]);
      setMensaje("Colaborador agregado exitosamente.");
      setTipoMensaje("success");

     
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    } else {
      setMensaje("Hubo un problema al agregar el colaborador.");
      setTipoMensaje("danger");
    }
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const buscarColaboradores = (busqueda) => {
    const terminoBusqueda = busqueda.toLowerCase();

    const colaboradoresFiltrados = colaboradoresOriginal.filter((colaborador) => {
      const nombre = colaborador.nombre.toLowerCase();
      const correo = colaborador.correo.toLowerCase();
      const edad = colaborador.edad.toLowerCase();
      const cargo = colaborador.cargo.toLowerCase();
      const telefono = colaborador.telefono.toLowerCase();

      return (
        nombre.includes(terminoBusqueda) ||
        correo.includes(terminoBusqueda) ||
        edad.includes(terminoBusqueda) ||
        cargo.includes(terminoBusqueda) ||
        telefono.includes(terminoBusqueda)
      );
    });

    setColaboradores(colaboradoresFiltrados);
  };

  const limpiarBusqueda = () => {
   
    setColaboradores(colaboradoresOriginal);
    setMensaje(""); 
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <Buscador buscarColaboradores={buscarColaboradores} limpiarBusqueda={limpiarBusqueda} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Formulario agregarColaborador={agregarColaborador} />
          {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
        </div>
      </div>
    </div>
  );
  
  
}

export default App;
