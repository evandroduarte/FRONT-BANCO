import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import api from "../../../../services/api";

export default function TelaGerenciarDoacao(props) {
  //variavel que receberá as informações do banco
  let dados_doacoes = props.data;

  return dados_doacoes.length > 0 ?   //se a doacao for vazia nao retorna nada.
    <div className="card-centro espacamento-inferior">
      <h2>Nenhuma doação cadastrada.</h2>
    </div>
    : (
    dados_doacoes.map(function (dado, index) {
      return (
        <>
          {/* Tela de Edição */}
          <div className="modal" id={`modal${index}`}>
            <div className="modal-main">
              <div className="header-editar-doacao">
                <h2>Editar Doação</h2>
                <div
                  className="botao-fechar"
                  onClick={() => fecharModal(index)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <div className="div-editarDado">
                <label htmlFor="edicao-descricao">Descrição</label>
                <input type="text" id={`edicao-descricao${index}`} />
              </div>

              <div className="div-editarDado">
                <label htmlFor="edicao-urgencia">Urgência</label>
                <select name="edicao" id={`edicao-urgencia${index}`}>
                  <option value={1}>Tá suave</option>
                  <option value={2}>Tá precisando</option>
                  <option value={3}>Tá precisando urgente</option>
                </select>
              </div>

              <div className="div-editarDado">
                <label htmlFor="edicao-imagem">Imagem</label>
                <input
                  type="file"
                  id={`edicao-imagem${index}`}
                  style={{
                    background: "white",
                    color: "black",
                    width: "23rem",
                  }}
                />
              </div>

              <div className="div-linha-edicao">
                <div className={"div-editarDado"}>
                  <label htmlFor="edicao-data">Data de Expiração</label>
                  <input type="date" id={`edicao-data${index}`} />
                </div>

                <div className="div-editarDado" style={{ marginLeft: "50px" }}>
                  <label htmlFor="edicao-valor">Valor</label>
                  <input
                    type="number"
                    style={{ padding: "7px", width: "12rem" }}
                    id={`edicao-valor${index}`}
                    min={0}
                  />
                </div>
              </div>

              <div className="div-editarDado-tabela">
                <div className="linha">
                  <label htmlFor="edicao-valor">Itens Necessários</label>
                  <div className="sinais">
                    <a className="sinal" onClick={() => RemoverItem(index)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </a>
                    <a className="sinal" onClick={() => AdicionarItem(index)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                  </div>
                </div>
                <div
                  className="div-inputItens"
                  id={`div-inputItens-edicao-${index}`}
                >
                  <div
                    className="div-itens-edicao"
                    id={`div-itens-edicao-${index}`}
                    key={index}
                  ></div>
                </div>
              </div>

              <div className="div-salvar">
                <a id="salvar-edicao" onClick={() => fecharModal(index)}>
                  Salvar Edição
                </a>
              </div>
            </div>
          </div>

          {/* Tela Mostrando Dados */}
          <div className="card-centro espacamento-inferior">
            <h2 className="informacao-ong">Doação Cadastrada</h2>
            <div className="div-inputDado">
              <p>Descrição: </p>
              <p>{dado.DR_description}</p>
            </div>

            <div className="div-inputDado">
              <p>Urgência: </p>
              <p>{dado.DR_urgency}</p>
            </div>

            {/* <div className="div-inputDado">
            <p>Imagem: </p>
            <p>{dado}</p>
          </div> */}

            <div className="div-inputDado">
              <p>Data de Expiração: </p>
              <p>{formatDate(dado.DR_expiryDate)}</p>
            </div>

            <div className="div-inputDado">
              <p>Valor: </p>
              <p>{dado.DR_money}</p>
            </div>

            {/* <div className="div-inputDado">
            <div className="linha">
              <p>Itens Necessários</p>
            </div>
            <div className="div-itens" key={index}>
              <table className="tabela-item">
                <tr className="tabela-cabecalho">
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Tipo Item</th>
                </tr>
                {dado.itens.map(function (item, index) {
                  return (
                    <tr>
                      <th>{item.item_description}</th>
                      <th>{item.item_quantity}</th>
                      <th>{item.item_type}</th>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div> */}

            {/* prettier-ignore */}
            <div className="botoes-linha">
              <div className="div-salvar">
                <a id="excluir-doacao" onClick={() => DeletarDoacao(dado.DR_id)}> Excluir Doação </a>
              </div>
              <div className="div-salvar">
                <a id="salvar-doacao" onClick={() => abrirModal(index)}> Editar Doação </a>
              </div>
            </div>
          </div>
        </>
      );
    })
  );

  /**
   * Abre o modal selecionado.
   * @param {Number} index Número do modal.
   */
  function abrirModal(index) {
    //tornando o modal visivel
    document
      .querySelector(`#modal${index}`)
      .setAttribute("style", "display:block");

    //carregando valores para os inputs
    document.querySelector(`#edicao-descricao${index}`).value =
      dados_doacoes[index].descricao;
    document.querySelector(`#edicao-urgencia${index}`).value =
      dados_doacoes[index].urgencia;
    let aux_data = dados_doacoes[index].dataExpiracao.split("/");
    let data = `${aux_data[2]}-${aux_data[1]}-${aux_data[0]}`;
    document.querySelector(`#edicao-data${index}`).value = data;
    document.querySelector(`#edicao-valor${index}`).value =
      dados_doacoes[index].valor;

    //zerando tabela de itens
    let div_pai = document.querySelector(`#div-inputItens-edicao-${index}`);
    div_pai.innerHTML = "";

    //inserindo itens na tabela
    //cria o elemento html e depois insere o valor dentro do input
    for (let aux = 0; aux < dados_doacoes[index].itens.length; aux++) {
      let div_linha = document.createElement("div");
      div_linha.setAttribute("class", "div-itens-edicao");
      div_linha.setAttribute("id", `div-itens-edicao-${index}-${aux}`);

      let input_descricao = document.createElement("input");
      input_descricao.setAttribute("id", `descricao-item-${index}-${aux}`);
      input_descricao.setAttribute("class", "input-descricao");

      let input_qtd = document.createElement("input");
      input_qtd.setAttribute("id", `qtd-item-${index}-${aux}`);
      input_qtd.setAttribute("class", "input-quantidade");

      let input_tipo = document.createElement("input");
      input_tipo.setAttribute("id", `tipo-item-${index}-${aux}`);
      input_tipo.setAttribute("class", "input-tipo");

      div_linha.appendChild(input_descricao);
      div_linha.appendChild(input_qtd);
      div_linha.appendChild(input_tipo);

      div_pai.appendChild(div_linha);

      document.querySelector(`#descricao-item-${index}-${aux}`).value =
        dados_doacoes[index].itens[aux].descricao;
      document.querySelector(`#qtd-item-${index}-${aux}`).value =
        dados_doacoes[index].itens[aux].quantidade;
      document.querySelector(`#tipo-item-${index}-${aux}`).value =
        dados_doacoes[index].itens[aux].tipo;
    }
  }

  /**
   * Fecha o modal aberto.
   * @param {Number} index Indice do modal.
   */
  function fecharModal(index) {
    document
      .querySelector(`#modal${index}`)
      .setAttribute("style", "display:none");
  }

  /**
   * Adiciona uma nova linha aos itens de doação.
   */
  function AdicionarItem(index) {
    const qtd_itens = document.querySelector(`#div-inputItens-edicao-${index}`)
      .childElementCount;

    let div_pai = document.querySelector(`#div-inputItens-edicao-${index}`);

    let div_linha = document.createElement("div");
    div_linha.setAttribute("class", "div-itens-edicao");
    div_linha.setAttribute("id", `div-itens-edicao-${index}-${qtd_itens}`);

    // adicionando inputs
    let input_descricao = document.createElement("input");
    input_descricao.setAttribute("id", `descricao-item-${index}-${qtd_itens}`);
    input_descricao.setAttribute("class", "input-descricao");
    input_descricao.placeholder = "Descrição";

    let input_qtd = document.createElement("input");
    input_qtd.setAttribute("id", `qtd-item-${index}-${qtd_itens}`);
    input_qtd.setAttribute("class", "input-quantidade");
    input_qtd.placeholder = "Qtd";

    let input_tipo = document.createElement("input");
    input_tipo.setAttribute("id", `tipo-item-${index}-${qtd_itens}`);
    input_tipo.setAttribute("class", "input-tipo");
    input_tipo.placeholder = "Tipo";

    div_linha.appendChild(input_descricao);
    div_linha.appendChild(input_qtd);
    div_linha.appendChild(input_tipo);

    div_pai.appendChild(div_linha);
  }

  /**
   * Remove uma linha dos itens de doação.
   */
  function RemoverItem(index) {
    const qtd_itens =
      document.querySelector(`#div-inputItens-edicao-${index}`)
        .childElementCount - 1;

    if (qtd_itens >= 0) {
      let div_linha_remover = document.querySelector(
        `#div-itens-edicao-${index}-${qtd_itens}`
      );
      div_linha_remover.remove();
    }
  }

  async function DeletarDoacao(DR_id) {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("ongToken")}`,
        ong: `${sessionStorage.getItem("ongId")}`,
      },
    };

    try {
      await api
        .delete("/donationrequest/" + DR_id, config)
        .then(window.location.reload());
    } catch (err) {
      console.log(err);
    }
  }

  function formatDate(input) {
    if (input) {
      var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1],
        day = datePart[2];

      return day + "/" + month + "/" + year;
    } else {
      return;
    }
  }
}
