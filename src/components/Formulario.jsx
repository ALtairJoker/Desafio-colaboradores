import Button from "react-bootstrap/Button";

function Formulario({
  agregarColavoradorNombre,
  agregarColavoradorCorreo,
  agregarColaborador,
}) {
  return (
    <div>
      <form action="" className="d-flex flex-column justify-content-center ">
        <h3 className="m-3">Nombre de colaborador</h3>
        <input
          type="text"
          placeholder="Ingrese nombre de colaborador"
          className="mb-3 m-3"
          onChange={agregarColavoradorNombre}
        />
        <h3 className="m-3">Correo de colaborador</h3>
        <input
          type="email"
          placeholder="Ingrese correo de colaborador"
          className="mb-3 m-3"
          onChange={agregarColavoradorCorreo}
        />
      </form>
      <Button variant="success" className="m-3" onClick={agregarColaborador}>
        Agregar colaborador
      </Button>
    </div>
  );
}

export default Formulario;
