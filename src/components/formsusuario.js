import React, { useState, useEffect } from "react";
import "./styles.css";

const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
  rut: "",
};

const FormUsuarioComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, correo, rut } = usuario;

  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        nombre: "",
        apellido: "",
        correo: "",
        rut: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };

  return (
    <form>
      {usuarioEditado !== null ? (
        <h1>Editar Usuario</h1>
      ) : (
        <h1>Ingrese Usuario</h1>
      )}
      <div class="form text-white">
        <div className="container mt-4">
          <div class="mb-3">
            <label for="RUT" class="form-label">
              RUT
            </label>
            <input
              type="text"
              class="form-control"
              id="RUT"
              aria-describedby="emailHelp"
              name="rut"
              value={rut}
              onChange={handleInputChange}
            />
            <div id="emailHelp" class="form-text">
              Ingrese su Rut sólo con guión
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div class="mb-3">
            <label for="Nombre" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="Nombre"
              aria-describedby="emailHelp"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container mt-4">
          <div class="mb-3">
            <label for="Apellido" class="form-label">
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              id="Apellido"
              aria-describedby="emailHelp"
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container mt-4">
          <div class="mb-3">
            <label for="Correo" class="form-label">
              Correo
            </label>
            <input
              type="email"
              class="form-control"
              id="Correo"
              aria-describedby="emailHelp"
              name="correo"
              value={correo}
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
            <br />
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </div>
          <br />

          <div class="d-flex justify-content-center">
            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userEdit(usuario)}
              >
                Editar usuario
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userAdd(usuario)}
              >
                Ingresar usuario
              </button>
            )}

            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => setUsuarioEditado(null)}
              >
                Cancelar
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormUsuarioComponent;
