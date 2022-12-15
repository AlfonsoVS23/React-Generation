import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponents,
  FormAutoComponent,
  TableAutoComponent,
} from "../components";

const Autopage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [useNavigate]));
  return (
    <div>
      <FormAutoComponent />
      <TableAutoComponent />
      <div>
        <ButtonComponents
          infoBoton={"Ir a Usuario"}
          handleOnClick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Autopage;
