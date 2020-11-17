import React, {useState} from "react";
import api from "../../../../services/api";

import "../../styles.css";

export default function TelaHome() {

  const [responseData, setResponseData] = useState('');

  //Traz as informações da ong no momento em que a pagina é carregada.
  window.onload = async function getOng(e) {
    e.preventDefault();

    const ong_id = sessionStorage.getItem("ongId");

    try {
      await api.get("/ongs/profile/" + ong_id).then((response) => {
        setResponseData(response.data[0]);
      });
    } catch (err) {
      alert("Falha no carregamento das informações!");
    }
  };

  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Home</h2>
      <p className="texto-ong">{}</p>
    </div>
  );
}
