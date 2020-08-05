import React from 'react';

import Helmet from 'react-helmet'
import {Fundo, Content, Informacoes, Formulario} from './styles'
import logo from '../../assets/logo_semfundo.png';

function RegisterUser(){
    return (
        <Fundo>
            <Content>
                <Informacoes>
                    <Helmet title="Cadastro Colaborador" />
                    <section>
                        <img src={logo} alt="bannner" className="banner"/>
                        <h1>Faça o seu cadastro</h1>
                        <p>Realize seu cadastro na plataforma e contribua para a causa do bem estar animal</p> 
                        <p>    - Ajude as ONGs de proteção animal</p> 
                        <p>    - Ajude os animais perdidos a encontrarem seus donos </p>
                    </section>
                </Informacoes>
                <Formulario>
                    <form className="form">
                        <h2>Preencha com seus dados</h2>
                        <input placeholder="Nome completo" required/>
                        <input placeholder="Telefone (Whatsapp)" required/>
                        <div className="input-group">
                        <input className="input-city" placeholder="Cidade"/>
                        <input placeholder="UF" required maxLength="2" className="input-uf" />
                        <input placeholder="E-mail" required type="email" />
                        <input placeholder="Senha" required type="password"/>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </Formulario>
            </Content>
        </Fundo>
    );
};

export default RegisterUser;