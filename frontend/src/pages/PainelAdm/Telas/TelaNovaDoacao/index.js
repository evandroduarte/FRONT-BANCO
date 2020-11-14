import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import "../../styles.css";

export default function TelaNovaDoacao() {
  const [contador, setContador] = useState(0);
  const [itens, setItens] = useState([1]);

  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Dados da Doação</h2>
      <div className="div-inputDado">
        <label htmlFor="doacao-descricao">Descrição</label>
        <input type="text" id="doacao-descricao" />
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-urgencia">Urgência</label>
        <select name="doacao" id="doacao-urgencia">
          <option value={1}>Tá suave</option>
          <option value={2}>Tá precisando</option>
          <option value={3}>Tá precisando urgente</option>
        </select>
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-imagem">Imagem</label>
        <input type="file" id="doacao-imagem" />
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-data">Data de Expiração</label>
        <input type="date" id="doacao-data" />
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-valor">Valor</label>
        <input type="number" id="doacao-valor" />
      </div>

      <div className="div-inputDado">
        <div className="linha">
          <label htmlFor="doacao-valor">Itens Necessários</label>
          <div className="sinais">
            <a className="sinal" onClick={() => {RemoverItem();}}>
              <FontAwesomeIcon icon={faMinus} />
            </a>
            <a className="sinal" onClick={() => { AdicionarItem(); setContador(contador + 1);}}
            >
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
        </div>
        {itens.map(function (_, index) {
          return (
            <div className="div-itens" key={index}>
              <input type="text" className={"input-descricao"} id={`descricao-item${index}`} placeholder="Descrição"/>
              <input type="number" className={"input-quantidade"} id={`qtd-item${index}`} min={0} placeholder={"Qtd"}/>
              <input type="" className={"input-tipo"} id={`tipo-item${index}`} placeholder={"Tipo Item"}/>
            </div>
          );
        })}
      </div>

      <div className="div-salvar">
        <a id="salvar-doacao" onClick={() => SalvarDoacao()}>
          Salvar Doação
        </a>
      </div>
    </div>
  );

  function SalvarDoacao() {
    let itens = [];

    for (let aux = 0; aux < contador + 1; aux++) {
      let descricao = document.querySelector(`#descricao-item${aux}`).value;
      let quantidade = document.querySelector(`#qtd-item${aux}`).value;
      let tipo = document.querySelector(`#tipo-item${aux}`).value;

      itens.push({
        descricao: descricao,
        quantidade: quantidade,
        tipo: tipo,
      });
    }
  }

  function AdicionarItem() {
    let descricao = document.querySelector(`#descricao-item${contador}`).value;
    let quantidade = document.querySelector(`#qtd-item${contador}`).value;
    let tipo = document.querySelector(`#tipo-item${contador}`).value;

    let itemNovo = { descricao: descricao, quantidade: quantidade, tipo: tipo };

    setItens([(itens[contador] = itemNovo), ...itens]);
  }

  function RemoverItem() {
    if (contador > 0) {
      itens.pop();
      setItens([...itens]);
      setContador(contador - 1);
    }
  }
}
