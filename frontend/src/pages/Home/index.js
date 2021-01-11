import React, { useState } from "react";

import './styles.css';

import {
  Fundo,
  Content,
  Banner,
  QmSomos,
  CausasTitulo,
  Listagem,
  CardONG,
  CardAnimal,
  CasosAnimal,
  CasosONG,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/* Simple Bar import */
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import { Link, useHistory } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

import banner from "../../assets/banner.png";
import quemSomos from "../../assets/quemSomos.png";
import aboutBanner from "../../assets/aboutBanner.png";
import causasOngs from "../../assets/causasongs.png";
import animaisPerdidos from "../../assets/animaisperdidos.png";
import causasTitulo from "../../assets/causastitulo.png";
import api from "../../services/api";
import { useEffect } from "react";

function Login() {
  const [incidents, setIncidents] = useState([]);
  const [lostanimals, setLostAnimals] = useState([]);

  const history = useHistory();

  useEffect(() => {
    api.get("lostanimals").then((response) => {
      setLostAnimals(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("donationrequest").then((response) => {
      setIncidents(response.data);
    });
  }, []);

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  }

  return (
    <Fundo>
      <Content>
        <Banner>
          <img src={banner} alt="bannner" className="banner" />
        </Banner>
        <div className="bemVindo">
          <h1>Bem vindo ao Look For!</h1>
          <p className="subTitulo">
            A plataforma que nos une em prol do bem estar animal
          </p>
        </div>
        <div className="btnBemVindo">
          <button type="submit" className="buttonONG">
            <Link
              to="/loginong"
              style={{ textDecoration: "none", color: "white" }}
            >
              ONG
            </Link>
          </button>

          <button type="submit" className="buttonUser">
            <Link
              to="/loginuser"
              style={{ textDecoration: "none", color: "white" }}
            >
              Colaborador
            </Link>
          </button>
        </div>
        <QmSomos>
          <div className="aboutUs">
            <img src={quemSomos} alt="quemSomos" />
          </div>
          <div className="aboutUsContent">
            <p style={{ textAlign: "right" }}>
              A <b>Look For</b> é uma organização não lucrativa com o objetivo
              de unir causas animais. Nosso objetivo é atingido disponibilizando
              uma plataforma totalmente online e gratuita para Ongs informarem
              suas causas e necessidades de doações e para usuários cadastrarem
              animais perdidos ou consultar dados de Ongs.
              <br />
              <br />
              Participe com doações ou cadastre sua Ong!
              <br />
              <b>Venha fazer parte!</b>
            </p>
            <img src={aboutBanner} alt="aboutBanner" />
          </div>
        </QmSomos>

        <CausasTitulo>
          <img src={causasTitulo} alt="Titulo" />
        </CausasTitulo>

        <Listagem>
          <CasosAnimal>
            <img
              src={animaisPerdidos}
              alt="Animais Perdidos"
              className="titulos"
            />
            <SimpleBar style={{ height: "1300px" }}>
              <ul className="list">
                {lostanimals.map((lostanimal) => (
                  <>
                    {/*Modal Animal Perdido */}
                    <div className="modal-animal-perdido" id={`LostAnimalModal-${lostanimal.LA_id}`}>
                      <div className="modal-animal-perdido-main">
                        <div className="header-modal-animal-editar-doacao">
                          <h2 className="titulo-animal-perdido">Informações Detalhadas</h2>
                          <div className="botao-fechar" onClick={() => fecharModal(lostanimal.LA_id)}>
                            <FontAwesomeIcon icon={faTimes} />
                          </div>
                        </div>
                        <div className="div-imagem">
                          <img className="LA_modal-imagem" src={lostanimal.LA_image.replace("uploads","http://localhost:3333")} alt="Foto do Animal"/>
                        </div>
                        <div className="informacoes-modal-animal-perdido">
                          <p>{lostanimal.LA_description}</p>
                        </div>
                      </div>
                    </div>

                    <li key={lostanimal.LA_id}>
                      <CardAnimal onClick={() => {abrirModal(lostanimal.LA_id)}}>
                        <div className="media">
                          <img
                            src={lostanimal.LA_image.replace(
                              "uploads",
                              "http://localhost:3333"
                            )}
                            className="imagem"
                            alt="Lost Animal"
                          />
                        </div>
                        <div className="descricao">
                          <p>{lostanimal.LA_description}</p>
                          <h3>{formatDate(lostanimal.LA_date)}</h3>
                          <div className="localizacao">
                            <FiMapPin size={16} color="#463B88" />
                            <h4>Localização</h4>
                          </div>
                        </div>
                      </CardAnimal>
                    </li>
                  </>
                ))}
              </ul>
            </SimpleBar>
          </CasosAnimal>
          <CasosONG>
            <img src={causasOngs} alt="Causas Ongs" className="titulos" />
            <SimpleBar style={{ height: "1300px" }}>
              <ul>
                {incidents.map((incident) => (
                  <li key={incident.DR_id}>
                    <CardONG>
                      <div className="media">
                        <img
                          src={incident.ong_image.replace(
                            "uploads",
                            "http://localhost:3333"
                          )}
                          className="imagem"
                          alt="Ong"
                        />
                      </div>
                      <div className="descricao">
                        <h1>{incident.ong_name}</h1>
                        <p>{incident.DR_description}</p>
                        <h4>{formatDate(incident.DR_date)}</h4>
                        <div className="localizacao">
                          <h3>
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(incident.DR_money)}
                          </h3>
                        </div>
                      </div>
                    </CardONG>
                  </li>
                ))}
              </ul>
            </SimpleBar>
          </CasosONG>
        </Listagem>
      </Content>
    </Fundo>
  );

  /**
   * Fecha o modal aberto.
   * @param {Number} index Indice do modal.
   */
  function fecharModal(index) {
    document
      .querySelector(`#LostAnimalModal-${index}`)
      .setAttribute("style", "display:none");
  }

  function abrirModal(index) {
    //tornando o modal visivel
    
    document
      .querySelector(`#LostAnimalModal-${index}`)
      .setAttribute("style", "display:block");
  }
}

export default Login;
