import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';


import api from '../../../../services/api';


import "./styles.css";

export default function TelaNovaDoacao() {

  const [contador, setContador] = useState(0);
  const [itens, setItens] = useState([1]);

  const [DR_description, setDescription] = useState('');
  const [DR_urgency, setUrgency] = useState('');
  const [DR_money, setMoney] = useState('');
  const [DR_image, setImage] = useState('');
  const [DR_expiryDate, setExpiryDate] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    //Criação do array de itens antes do salvamento do pedido
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

    for (let aux = 0; aux < contador + 1; aux++) {
      try{
        
      }catch{

      }
    }

    try{
        const form = document.forms[0];
        var formData = new FormData(form);
        
        const response = await api.post('donationrequest', formData);

        alert(`Causa cadastrada com sucesso!`);
        console.log(response);
        history.push('/paineladm');
    }catch(err){
        console.log(err);
        alert(`Erro no cadastro, usuario já cadastrado,tente novamente`);
    }


}

async function SalvarDoacao() {

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


  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Dados da Doação</h2>
      <div className="div-inputDado">
        <label htmlFor="doacao-descricao">Descrição</label>
        <input
          type="text"
          id="doacao-descricao"
          placeholder="Descrição"
          required
          value={DR_description}
          onChange={(e) => setDescription(e.target.value)}
          name="doacao-descricao"
        />
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
          <input
            type="file"
            accept="image/png, image/jpeg"
            value={DR_image}
            onChange={(e) => setImage(e.target.files[0])}
            name="doacao-imagem"
            id="doacao-imagem"
          />
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-data">Data de Expiração</label>
        <input 
        type="date"
        id="doacao-data"
        value = {DR_expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        name = "doacao-data"
        required
        />
      </div>

      <div className="div-inputDado">
        <label htmlFor="doacao-valor">Valor</label>
        <input 
        type="number" 
        id="doacao-valor"
        value = {DR_money}
        onChange={(e) => setMoney(e.target.value)} 
        />
      </div>

      <div className="div-inputDado">
        <div className="linha">
          <label htmlFor="doacao-valor">Itens Necessários</label>
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
        {itens.map(function (_, index) {
          return (
            <div className="div-itens" key={index}>
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

      <div className="div-salvar">
        <a id="salvar-doacao" onClick={() => SalvarDoacao()}>
          Salvar Doação
        </a>
      </div>
    </div>
  );
}
