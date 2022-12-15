import { useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import background from "../Assets/IMG/volvote.jpg";
import {
  FormUsuarioComponent,
  TableUsuarioComponent,
  ButtonComponents,
  TableAutoComponent,
} from "../components";
import OfertaTrucha from "./OfertaTrucha";

// se crea usuario 1 como datos a mostrar en tabla
const usuario1 = [
  {
    rut: "111111-1",
    nombre: "Jopseph",
    apellido: "el maldito",
    correo: "elmalditojoseph@yahoo.es",
  },
  {
    rut: "2222222-1",
    nombre: "kenshiro",
    apellido: "FistoftheNorthStar",
    correo: "atatatata@yahoo.es",
  },
];

const usuario2 = {
  nombre: "elotrojoseph",
  rut: "22222-2",
  IDcompra: "22",
};

const auto1 = [
  {
    numero: "1111",
    marca: "nissan",
    modelo: "skyline",
    año: "1992",
    precio: "10",
  },
  {
    numero: "2222",
    marca: "mazda",
    modelo: "rx-7",
    año: "1993",
    precio: "11",
  },
];

// se agrega la opción de que al clickear en auto se nos despliegue a la página auto, lo mismo con oferta trucha.
const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [useNavigate]));
  const ofertaOnClick = useCallback(() =>
    navigate("/OfertaTrucha", {}, [useNavigate])
  );

  // se definen las funciones de agregar usuario,  editar y eliminar usuario
  const [user, setState] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const userDelete = (rutUsuario) => {
    const changeUser = user.filter((usuario) => usuario.rut != rutUsuario);
    setState(changeUser);
  };

  const useradd = (usuario) => {
    const addusuario = [...user, usuario];
    setState(addusuario);
  };

  const userEdit = (usuarioEditado) => {
    const editUser = user.map((usuario) =>
      usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario
    );
    setState(editUser);
  };

  const [auto, setAuto] = useState(auto1);

  const autoDelete = (modeloAuto) => {
    const changeAuto = auto.filter((auto) => auto.modelo != modeloAuto);
    setAuto(changeAuto);
  };

  return (
    <div>
      <img
        src={background}
        alt="aaa"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "220%",
        }}
      />
      <br />
      <FormUsuarioComponent
        userAdd={useradd}
        usuarioEditado={usuarioEditado}
        setUsuarioEditado={setUsuarioEditado}
        userEdit={userEdit}
      />
      <br />
      <TableUsuarioComponent
        usuarios={user}
        deleteUser={userDelete}
        setUsuarioEditado={setUsuarioEditado}
      />
      <br />
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-row-reverse">
          <ButtonComponents
            infoBoton={"Ir a Auto"}
            handleOnClick={handleOnClick}
          />
          <ButtonComponents
            infoBoton={"Ir a OFERTA ÚNICA"}
            handleOnClick={ofertaOnClick}
          />
        </div>
      </div>
      <div>
        <TableAutoComponent autos={auto} deleteAuto={autoDelete} />
      </div>
    </div>
  );
};
export default HomePage;
