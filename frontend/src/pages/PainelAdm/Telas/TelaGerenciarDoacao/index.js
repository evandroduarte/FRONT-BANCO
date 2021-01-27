import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import api from "../../../../services/api";

export default function TelaGerenciarDoacao(props) {
  //variavel que receberá as informações do banco
  const [dados_doacoes, setDoacoes] = useState(props.data);

  return dados_doacoes[0]?.DR_description == undefined ? ( //se a doacao for vazia nao retorna nada.
    <div className="card-centro espacamento-inferior">
      <h2>Nenhuma doação cadastrada.</h2>
    </div>
  ) : (
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

              <div className="div-linha-edicao">
                <div className={"div-editarDado"}>
                  <label htmlFor="edicao-urgencia">Urgência</label>
                  <select name="edicao" id={`edicao-urgencia${index}`}>
                    <option value={1}>Tá suave</option>
                    <option value={2}>Tá precisando</option>
                    <option value={3}>Tá precisando urgente</option>
                  </select>
                </div>
                <div className={"div-editarDado"}>
                  <label htmlFor="edicao-data">Data de Expiração</label>
                  <input type="date" id={`edicao-data${index}`} />
                </div>

                <div className="div-editarDado">
                  <label htmlFor="edicao-valor">Valor</label>
                  <input
                    type="number"
                    style={{ padding: "7px", width: "12rem" }}
                    id={`edicao-valor${index}`}
                    min={0}
                  />
                </div>
              </div>

              <div className="div-editarDado">
                <label htmlFor="edicao-imagem">Imagem</label>
                <div className="div-editarDado-imagem">
                  <img
                    className="imagem-editarDado"
                    src=""
                    alt=""
                    id={`edicao-imagem${index}`}
                  />
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
                <a id="salvar-edicao" onClick={() => SalvarEdicao(index, dado.DR_id)}>
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

            {/* prettier-ignore */}
            <div className="botoes-linha">
              <div className="div-salvar">
                <a id="excluir-doacao" onClick={() => DeletarDoacao(dado.DR_id, index)}> Excluir Doação </a>
              </div>
              <div className="div-salvar">
                <a id="salvar-doacao" onClick={() => abrirModal(index, dado.DR_id)}> Editar Doação </a>
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
  function abrirModal(index, DR_id) {
    console.log(DR_id);

    //tornando o modal visivel
    document
      .querySelector(`#modal${index}`)
      .setAttribute("style", "display:block");

    //carregando valores para os inputs
    document.querySelector(`#edicao-descricao${index}`).value =
      dados_doacoes[index].DR_description;
    document.querySelector(`#edicao-urgencia${index}`).value =
      dados_doacoes[index].DR_urgency;

    document.querySelector(`#edicao-imagem${index}`).src = dados_doacoes[
      index
    ].ong_image.replace("uploads", "http://localhost:3333");

    let aux_data = dados_doacoes[index].DR_expiryDate;
    let data = new Date(aux_data);
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    console.log(`${ano}-${mes}-${dia}`);
    document.querySelector(
      `#edicao-data${index}`
    ).value = `${ano}-${mes}-${dia}`;

    document.querySelector(`#edicao-valor${index}`).value =
      dados_doacoes[index].DR_money;

    //zerando tabela de itens
    let div_pai = document.querySelector(`#div-inputItens-edicao-${index}`);
    div_pai.innerHTML = "";

    let array_itens = dados_doacoes[index].ItemsDescription.split(",");
    let array_quantidades = dados_doacoes[index].ItemsQuantity.split(",");
    let array_unidades = dados_doacoes[index].ItemsType.split(",");
    let tamanho_array = array_itens.length;

    //inserindo itens na tabela
    //cria o elemento html e depois insere o valor dentro do input
    for (let aux = 0; aux < tamanho_array; aux++) {
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

      let input_excluir = document.createElement("a");
      input_excluir.setAttribute("id", `excluir-item-${index}-${aux}`);
      input_excluir.setAttribute("class", "input-icone");
      input_excluir.innerHTML = "&#128465";
      input_excluir.onclick = () => removerLinha(index, aux);

      div_linha.appendChild(input_descricao);
      div_linha.appendChild(input_qtd);
      div_linha.appendChild(input_tipo);
      div_linha.appendChild(input_excluir);

      div_pai.appendChild(div_linha);

      document.querySelector(`#descricao-item-${index}-${aux}`).value =
        array_itens[aux];
      document.querySelector(`#qtd-item-${index}-${aux}`).value =
        array_quantidades[aux];
      document.querySelector(`#tipo-item-${index}-${aux}`).value =
        array_unidades[aux];
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
   * Remove a última linha dos itens de doação.
   */
  function RemoverItem(index) {
    const qtd_itens =
      document.querySelector(`#div-inputItens-edicao-${index}`)
        .childElementCount - 1;

    if (qtd_itens >= 0) {
      let div_linha_remover = document.querySelector(
        `#div-inputItens-edicao-${index}`
      );
      div_linha_remover.children[qtd_itens].remove();
    }
  }

  /**
   * Remove uma linha específica do item.
   * @param {Number} index Indice do modal.
   */
  function removerLinha(index, aux) {
    console.log(index, aux);

    const qtd_itens =
      document.querySelector(`#div-inputItens-edicao-${index}`)
        .childElementCount - 1;

    if (qtd_itens >= 0) {
      let div_linha_remover = document.querySelector(
        `#div-itens-edicao-${index}-${aux}`
      );
      div_linha_remover.remove();
    }
  }

  async function SalvarEdicao(index, DR_id) {
    console.log(DR_id);

    let aux_descricao = document.querySelector(`#edicao-descricao${index}`)
      .value;
    let aux_urgencia = document.querySelector(`#edicao-urgencia${index}`).value;
    let aux_data = document.querySelector(`#edicao-data${index}`).value;
    let aux_valor = document.querySelector(`#edicao-valor${index}`).value;
    let aux_imagem = document.querySelector(`#edicao-imagem${index}`).value;

    let aux_itens_necessarios = document.querySelector(
      `#div-inputItens-edicao-${index}`
    );
    let array_obj_itens = [];

    for (let aux = 0; aux < aux_itens_necessarios.children.length; aux++) {
      array_obj_itens.push({
        item: aux_itens_necessarios.children[aux].children[0].value,
        quantidade: aux_itens_necessarios.children[aux].children[1].value,
        unidade: aux_itens_necessarios.children[aux].children[2].value,
      });
    }

    const config = {
      headers: { 'Authorization': `Bearer ${sessionStorage.getItem('ongToken')}`, 
      'ong': `${sessionStorage.getItem('ongId')}`}
    };

    try{
      await api.put('donationrequest/' + DR_id, {
        DR_description: aux_descricao,
        DR_urgency: aux_urgencia,
        DR_money: aux_valor,
        DR_expiryDate: aux_data,
      },config)
      .then(() => {
        try{
        api.delete("/items/" + DR_id, config)
        .then(() => {
          for (let aux = 0; aux < array_obj_itens.length; aux++) {
            try{
              api.post('items',         
              {item_description: array_obj_itens[aux].item,
              item_quantity: array_obj_itens[aux].quantidade,
              item_type: array_obj_itens[aux].unidade,
              donation_id: DR_id}
              ,config)
            window.location.reload();

            }catch(err){
              console.log(err);
              alert(`Erro no cadastro`);
            }
          }
        })
        }catch(err){
          console.log(err)
        }
      })
    }catch(err){
      console.log(err);
      alert('Atualização mal sucedida!');
    }


    // tá tudo dentro de:
    // aux_descricao
    // aux_urgencia
    // aux_data
    // aux_valor
    // aux_imagem
    // array_obj_itens*/
  }

  async function DeletarDoacao(DR_id, indexNoArray) {
    let aux_remover_item = dados_doacoes;

    aux_remover_item.splice(indexNoArray, 1);

    setDoacoes([...aux_remover_item]);

    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("ongToken")}`,
        ong: `${sessionStorage.getItem("ongId")}`,
      },
    };

    try {
      await api.delete("/items/" + DR_id, config).then(async () => {
        await api.delete("/donationrequest/" + DR_id, config);
      });
      window.location.reload();
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
