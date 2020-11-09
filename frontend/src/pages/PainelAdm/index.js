import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCommentsDollar, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faPrayingHands } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


import "./styles.css";


export default function PainelAdm() {
  const [seletorTela, setSeletor] = useState(0);

  return (
    <div className="container">
      <div className="col-esq">
        <a
          className="botoes-col-esq"
          onClick={() => {
            setSeletor(0);
            console.log(0);
          }}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(1)}>
          <FontAwesomeIcon icon={faPrayingHands} /> Nova Doação
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(2)}>
          <FontAwesomeIcon icon={faDog} /> Animal Perdido
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(3)}>
          Gerenciar Doações
        </a>
        <a className="botoes-col-esq" onClick={() => setSeletor(4)}>
          Gerenciar Pedidos
        </a>
      </div>

      <div className="col-centro">
        <h1 className="nome-ong">🐾 Nome da Ong</h1>
        {GerenciarTelas(seletorTela)}
      </div>
    </div>
  );
}

function GerenciarTelas(escolha) {
  const [itens, setItens] = useState([1]);
  const [contador, setContador] = useState(0);

  switch (escolha) {
    case 0:
      return TelaHome();
    case 1:
      return TelaNovaDoacao();
    case 2:
      return TelaAnimalPerdido();
    case 3:
      return TelaGerenciarDoacao();
    case 4:
      return TelaGerenciarPedido();
  }


/**
 * TELAS
 */

function TelaHome() {
  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Home</h2>
      <p className="texto-ong">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        amet eius debitis reprehenderit voluptate, ut asperiores provident
        recusandae cumque accusamus sunt qui explicabo modi aut iste. Quisquam
        ratione provident possimus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odit harum accusantium velit ipsam nulla nisi
        laboriosam voluptatem ipsa quo maiores optio necessitatibus explicabo,
        deserunt maxime vero laborum repudiandae blanditiis a. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Fuga nam tempora accusamus
        distinctio veritatis reprehenderit dolor ea natus repellat eveniet,
        cupiditate, sed temporibus ipsam blanditiis beatae, debitis vel. Fuga,
        quod!
      </p>
    </div>
  );
}

function TelaNovaDoacao() {

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
            <a className="sinal" onClick={() => {RemoverItem()}}>
              <FontAwesomeIcon icon={faMinus} />
            </a>
            <a className="sinal" onClick={() => {AdicionarItem();setContador(contador+1)}}>
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
        </div>
        {
        itens.map(function(_,index){
          return(
            <div className="div-itens" key={index}>
            <input type="text" id={`descricao-item${index}`} placeholder="Descrição"/>
            <input type="number" id={`qtd-item${index}`} placeholder={"Quantidade"}/>
            <input type="" id={`tipo-item${index}`} placeholder={"Tipo Item"}/>
          </div>
          )
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

    for(let aux = 0; aux < contador+1; aux++){
      let descricao = document.querySelector(`#descricao-item${aux}`).value;
      let quantidade = document.querySelector(`#qtd-item${aux}`).value;
      let tipo = document.querySelector(`#tipo-item${aux}`).value;

      itens.push({
        "descricao": descricao,
        "quantidade": quantidade,
        "tipo": tipo
      });
    }

    console.log(itens);

  }

  function AdicionarItem(){
    let descricao = document.querySelector(`#descricao-item${contador}`).value;
    let quantidade = document.querySelector(`#qtd-item${contador}`).value;
    let tipo = document.querySelector(`#tipo-item${contador}`).value;

    let itemNovo = {"descricao":descricao, "quantidade":quantidade, "tipo":tipo};

    setItens([itens[contador] = itemNovo,...itens]);
    console.log(itens);
  }

  function RemoverItem(){
    if(contador > 0){
      itens.pop();
      setItens([...itens]);
      setContador(contador-1);
    }
  }
}

function TelaAnimalPerdido() {
  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Animal Perdido</h2>
    </div>
  );
}

function TelaGerenciarDoacao() {
  return <div>Gerenciar Doacao</div>;
}

function TelaGerenciarPedido() {
  return <div>Gerenciar Pedido</div>;
}

}