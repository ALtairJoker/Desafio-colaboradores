function Listado({ colaboradores }) {
  return (
    <div>
      <h2 className="m-3">Lista Colaboradores</h2>
      <ul className="list-group list-group-flush">
        {colaboradores.map((colaborador) => (
          <li
            className="list-group-item list-group-item-primary"
            key={colaborador.id}
          >
            {colaborador.id} - {colaborador.nombre} - {colaborador.correo}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listado;
