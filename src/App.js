import { BaseColaboradores } from "./BasedeDatos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [colaboradorNombre, setColaboradorNombre] = useState("");
  const [colaboradorCorreo, setColaboradorCorreo] = useState("");
  const [filtro, setFiltro] = useState("");

  const agregarColavoradorNombre = (e) => {
    setColaboradorNombre(e.target.value);
  };
  const agregarColavoradorCorreo = (e) => {
    setColaboradorCorreo(e.target.value);
  };

  const agregarColaborador = () => {
    const nuevoColaborador = {
      id: colaboradores.length + 1,
      nombre: colaboradorNombre,
      correo: colaboradorCorreo,
    };
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validEmail.test(colaboradorCorreo)) {
      setColaboradores([...colaboradores, nuevoColaborador]);
    } else {
      alert("La dirección de email es incorrecta.");
    }
  };

  const inputFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const filtrar = (e) => {
    const listaFiltrada = colaboradores.filter(
      (el) => el.nombre.toLowerCase() === filtro.toLowerCase()
    );
    setColaboradores(listaFiltrada);
  };

  return (
    <div>
      <Buscador inputFiltro={inputFiltro} filtrar={filtrar} />
      <Formulario
        agregarColavoradorNombre={agregarColavoradorNombre}
        agregarColavoradorCorreo={agregarColavoradorCorreo}
        agregarColaborador={agregarColaborador}
      />
      <Listado colaboradores={colaboradores} />
    </div>
  );
}

export default App;
