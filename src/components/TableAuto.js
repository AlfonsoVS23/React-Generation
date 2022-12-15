import React from "react";

const TableAutoComponent = ({ autos, deleteAuto }) => {
  return (
    <div class="card container mb-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
          {autos.map((auto) => (
            <tr>
              <td>{auto.numero}</td>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.año}</td>
              <td>{auto.precio}</td>
              <td>
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-danger btn-lg"
                    onClick={() => {
                      deleteAuto(auto.modelo);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAutoComponent;
