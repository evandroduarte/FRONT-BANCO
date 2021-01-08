import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPrayingHands } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import TelaHome from "./Telas/TelaHome";
import TelaNovaDoacao from "./Telas/TelaNovaDoacao";
import TelaGerenciarDoacao from "./Telas/TelaGerenciarDoacao";

import api from '../../services/api';


import "./styles.css";
import { useHistory } from "react-router-dom";


export default function PainelAdm() {
  const [seletorTela, setSeletor] = useState(0);
  const [responseData, setResponseData] = useState([{ }]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  const ong_id = sessionStorage.getItem("ongId");

  useEffect(() => {
    try {
      api.get("/ongs/profile/" + ong_id)
      .then((response) => {
        setResponseData(response.data)
        setLoading(false);

        console.log(response.data)
      })
    }catch (err) {
      alert("Falha no carregamento das informações!");
    }
  },[])

  if(isLoading){
    return <div>Loading...</div>
  }

  function GerenciarTelas(escolha) {
    switch (escolha) {
      case 0:
        return <TelaHome data={responseData[0].ong_description}/>;
      case 1:
        return <TelaNovaDoacao />;
      case 3:
        return <TelaGerenciarDoacao data={responseData}/>;
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

        <a className="botoes-col-esq-sair" onClick={() => handleLogout()}>
          <div className="div-icone">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div className="div-texto">Sair</div>
        </a>
      </div>
      <div className="col-centro">
        <div className="div-titulo-ong">
          <img src={(responseData[0].ong_image).replace('uploads', 'http://localhost:3333')} className="imagem-ong"></img>
          <h1 className="nome-ong">{responseData[0].ong_name}</h1>
        </div>
        {GerenciarTelas(seletorTela)}
        <div id={"div-modal"}></div>
      </div>
    </div>
  );

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

}