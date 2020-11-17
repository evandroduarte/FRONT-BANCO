import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPrayingHands } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

import TelaHome from "./Telas/TelaHome";
import TelaNovaDoacao from "./Telas/TelaNovaDoacao";
import TelaGerenciarDoacao from "./Telas/TelaGerenciarDoacao";

import api from '../../services/api';


import "./styles.css";


export default function PainelAdm() {
  const [seletorTela, setSeletor] = useState(3);
  const [responseData, setResponseData] = useState('');

  //Traz as informações da ong no momento em que a pagina é carregada.
  window.onload = async function getOng(e){
    e.preventDefault();

    const ong_id = sessionStorage.getItem("ongId");

    try {
      await api.get("/ongs/profile/" + ong_id)
      .then((response) => {
        setResponseData(response.data[0]);
      })
    }catch (err) {
      alert("Falha no carregamento das informações!");
    }
  };

  return (
    <div className="container">
      <div className="col-esq">
        <a className="botoes-col-esq" onClick={() => setSeletor(0)}>
          <div className="div-icone">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="div-texto">Home</div>
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(1)}>
          <div className="div-icone">
            <FontAwesomeIcon icon={faPrayingHands} />
          </div>
          <div className="div-texto">Nova Doação</div>
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(3)}>
          <div className="div-icone">
            <FontAwesomeIcon icon={faClipboardCheck} />
          </div>
          <div className="div-texto">Gerenciar Doações</div>
        </a>
      </div>
      <div className="col-centro">
        <h1 className="nome-ong">{responseData.ong_name}</h1>
        {GerenciarTelas(seletorTela)}
        <div id={"div-modal"}></div>
      </div>
    </div>
  );
}

function GerenciarTelas(escolha) {
  switch (escolha) {
    case 0:
      return <TelaHome />;
    case 1:
      return <TelaNovaDoacao />;
    case 3:
      return <TelaGerenciarDoacao />;
  }
}
