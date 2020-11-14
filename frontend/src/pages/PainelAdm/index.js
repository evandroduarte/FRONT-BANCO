import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPrayingHands } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

import TelaHome from "./Telas/TelaHome";
import TelaNovaDoacao from "./Telas/TelaNovaDoacao";
import TelaGerenciarDoacao from "./Telas/TelaGerenciarDoacao";

import "./styles.css";

export default function PainelAdm() {
  const [seletorTela, setSeletor] = useState(3);

  return (
    <div className="container">
      <div className="col-esq">
        <a className="botoes-col-esq" onClick={() => setSeletor(0)}>
          <div className="div-icone"><FontAwesomeIcon icon={faHome} /></div>
          <div className="div-texto">Home</div>
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(1)}>
          <div className="div-icone"><FontAwesomeIcon icon={faPrayingHands} /></div>
          <div className="div-texto">Nova Doação</div>
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(3)}>
          <div className="div-icone"><FontAwesomeIcon icon={faClipboardCheck} /></div>
          <div className="div-texto">Gerenciar Doações</div>
        </a>
      </div>
      <div className="col-centro">
        <h1 className="nome-ong">🐾 Nome da Ong</h1>
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
