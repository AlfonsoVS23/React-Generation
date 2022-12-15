import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import imagenoferta from "../Assets/IMG/oferta.jpg";
import volvo from "../Assets/IMG/volvo.jpg";
import volvologo from "../Assets/IMG/volvologo.jpg";

const OfertaTrucha = () => {
  //   const navigate = useNavigate();
  //   const homeOnclick = useCallback(() => navigate("/Home", {}, [useNavigate]));
  return (
    <>
      <div style={{ backgroundColor: "grey", width: "100", height: "100" }}>
        <div>
          <nav class="navbar navbar-black bg-black">
            <a class="navbar-brand" href="#">
              <img
                src={volvologo}
                width="140"
                height="90"
                class="d-inline-block align-top"
                alt=""
              ></img>
              VolvoTrucks
            </a>
            <div />

            <br />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Catálogo
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Modelos
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Volvo FH
                    </a>
                    <a class="dropdown-item" href="#">
                      Volfo FMX
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Volvo VNL
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>

        <div class="d-flex justify-content-center">
          <h2>OFERTA ÚNICA E INIGUALABLE</h2>
        </div>

        <div class="d-flex justify-content-center">
          <img src={imagenoferta}></img>
        </div>
        <br />
        <div class="d-flex justify-content-center">
          <div class="card">
            <img class="card-img-top" src={volvo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Por la compra de un Volvito, te llevas de regalo un espejo
                retrovisor de un Volvote! Corre a comprar tu Volvito!.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div class="container-fluid">
          <div class="d-flex justify-content-center">
            <h6>
              Sólo aplicable para la versión full de $150.000.000 de Volvo FMX,
              bases no ante notario.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default OfertaTrucha;
