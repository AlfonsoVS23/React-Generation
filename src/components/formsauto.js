// import { Button } from "bootstrap";
import React from "react";
import ButtonComponents from "./button";

const FormAutoComponent = () => {
  return (
    <form>
      <div class="form text-white">
        <div className="container mt-0">
          <div class="mb-3">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Marca
              </label>
              <input type="text" class="form-control" id="exampleInputText" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Modelo
              </label>
              <input type="text" class="form-control" id="exampleInputText" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Color
              </label>
              <input type="text" class="form-control" id="exampleInputText" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Año
              </label>
              <input type="text" class="form-control" id="exampleInputText" />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Precio
              </label>
              <input type="text" class="form-control" id="exampleInputText" />
            </div>

            <div class="flex-row-reverse">
              <ButtonComponents infoBoton={"Enviar"} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAutoComponent;
