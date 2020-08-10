import React from 'react';

import {Fundo, Content, Informacoes, Formulario} from './styles'
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';

function Registeranimal(){
    return (
        
        <Fundo>
            <Content>
                <Informacoes>
                <Helmet title="Cadastrar Animal Perdido" />
                <section>
                    <img src={logo} alt="bannner" className="banner"/>
                    <h1>Cadastrar Animal Perdido</h1>
                    <p>Achou um animal perdido? Ou o seu se perdeu? Compartilhe 
                        conosco e nós vamos te ajudar Para isso, precisamos saber mais sobre o animal</p>
                </section>
                </Informacoes>
                <Formulario>
                <form className="form">
                    <h1>Dados do Animal</h1>
                    <input placeholder="Animal" required />
                    <textarea placeholder="Descrição" required />
                    <input placeholder="Localização"/>
                    <input placeholder="Data" required type="date" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </Formulario>
            </Content>
        </Fundo>
    );
};

export default Registeranimal;