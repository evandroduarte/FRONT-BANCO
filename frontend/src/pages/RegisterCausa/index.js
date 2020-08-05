import React from 'react';

import {Fundo, Content, Informacoes, Formulario} from './styles'
import { FiUpload } from 'react-icons/fi';
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';

function Registercausa(){
    return (
        
        <Fundo>
            <Content>
                <Informacoes>
                <Helmet title="Cadastrar Animal Perdido" />
                <section>
                    <img src={logo} alt="bannner" className="banner"/>
                    <h1>Cadastrar Causa</h1>
                    <p>Precisa de ajuda? Compartilhe conosco e nós vamos te ajudar. Para isso, precisamos saber mais sobre a sua causa</p>
                </section>
                </Informacoes>
                <Formulario>
                <form className="form">
                    <h1>Informações da causa</h1>
                    <input placeholder="Título da causa" required />
                    <textarea placeholder="Descrição" required />
                    <input placeholder="Valor"/>
                    <input placeholder="Data" required type="date" />
                    <label for="urgencia">Urgência:</label>
                    <select name="urgencia">
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alto">Alta</option>
                    </select>

                    <label class="custom-file-upload">
                        <input type="file" accept="image/png, image/jpeg"/>
                        <FiUpload size={48} color="#463B88" />
                        <h2>Selecione uma foto</h2>
                    </label>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </Formulario>
            </Content>
        </Fundo>
    );
};

export default Registercausa;