import Button from "react-bootstrap/Button";

function Buscador({ inputFiltro, filtrar }) {
  return (
    <div className="d-flex justify-content-around bg-dark text-light p-3">
      <h1>Lista colaboradores</h1>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Busca un colaborador"
          onChange={inputFiltro}
        />
        <Button variant="primary" className="ps-3 ms-2" onClick={filtrar}>
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default Buscador;
