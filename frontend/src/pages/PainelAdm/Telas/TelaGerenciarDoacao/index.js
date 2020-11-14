import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function TelaGerenciarDoacao() {
  const [contador, setContador] = useState(0);
  const [itens, setItens] = useState([1]);

  //variavel que receberá as informações do banco
  let dados_doacoes = [
    {
      descricao: "qualquer info",
      urgencia: 2,
      imagem: "",
      dataExpiracao: "13/11/2020",
      valor: 5,
      itens: [{ descricao: "ração", quantidade: 30, tipo: "quilo" }],
    },
  ];

  return dados_doacoes.map(function (dado, index) {
    return (
      <>
        {/* Tela de Edição */}
        <div className="modal">
          <div className="modal-main">
            <div className="header-editar-doacao">
              <h2>Editar Doação</h2>
              <div className="botao-fechar" onClick={fecharModal}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="div-inputDado">
              <label htmlFor="edicao-descricao">Descrição</label>
              <input type="text" id="edicao-descricao" />
            </div>

            <div className="div-inputDado">
              <label htmlFor="edicao-urgencia">Urgência</label>
              <select name="edicao" id="edicao-urgencia">
                <option value={1}>Tá suave</option>
                <option value={2}>Tá precisando</option>
                <option value={3}>Tá precisando urgente</option>
              </select>
            </div>

            <div className="div-inputDado">
              <label htmlFor="edicao-imagem">Imagem</label>
              <input type="file" id="edicao-imagem" />
            </div>

            <div className="div-linha-edicao">
              <div className={"div-inputDado"}>
                <label htmlFor="edicao-data">Data de Expiração</label>
                <input type="date" id="edicao-data" />
              </div>

              <div className="div-inputDado-valor">
                <label htmlFor="edicao-valor">Valor</label>
                <input type="number" id="edicao-valor" min={0} />
              </div>
            </div>

            <div className="div-inputDado">
              <div className="linha">
                <label htmlFor="edicao-valor">Itens Necessários</label>
                <div className="sinais">
                  <a
                    className="sinal"
                    onClick={() => {
                      RemoverItem();
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </a>
                  <a
                    className="sinal"
                    onClick={() => {
                      AdicionarItem();
                      setContador(contador + 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </div>
              <div className="div-inputItens">
                {itens.map(function (_, index) {
                  return (
                    <div className="div-itens-edicao" key={index}>
                      <input
                        type="text"
                        className={"input-descricao"}
                        id={`descricao-item${index}`}
                        placeholder="Descrição"
                      />
                      <input
                        type="number"
                        className={"input-quantidade"}
                        id={`qtd-item${index}`}
                        min={0}
                        placeholder={"Qtd"}
                      />
                      <input
                        type=""
                        className={"input-tipo"}
                        id={`tipo-item${index}`}
                        placeholder={"Tipo Item"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="div-salvar">
              <a id="salvar-edicao" onClick={fecharModal}>
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
            <p>{dado.descricao}</p>
          </div>

          <div className="div-inputDado">
            <p>Urgência: </p>
            <p>{dado.urgencia}</p>
          </div>

          <div className="div-inputDado">
            <p>Imagem: </p>
            <p>{dado.imagem}</p>
          </div>

          <div className="div-inputDado">
            <p>Data de Expiração: </p>
            <p>{dado.dataExpiracao}</p>
          </div>

          <div className="div-inputDado">
            <p>Valor: </p>
            <p>{dado.valor}</p>
          </div>

          <div className="div-inputDado">
            <div className="linha">
              <p>Itens Necessários</p>
            </div>
            <div className="div-itens" key={index}>
              <table className="tabela-item">
                <tr className="tabela-cabecalho">
                  <th>Item</th>
                  <th>Quantidade</th>
                  <th>Descrição</th>
                </tr>
                {dado.itens.map(function (item, index) {
                  return (
                    <tr>
                      <th>{item.descricao}</th>
                      <th>{item.quantidade}</th>
                      <th>{item.tipo}</th>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>

          {/* prettier-ignore */}
          <div className="botoes-linha">
              <div className="div-salvar">
                <a id="excluir-doacao"> Excluir Doação </a>
              </div>
              <div className="div-salvar">
                <a id="salvar-doacao" onClick={abrirModal}> Editar Doação </a>
              </div>
            </div>
        </div>
      </>
    );
  });

  function abrirModal() {
    document.querySelector(".modal").setAttribute("style", "display:block");
  }

  function fecharModal() {
    document.querySelector(".modal").setAttribute("style", "display:none");
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
