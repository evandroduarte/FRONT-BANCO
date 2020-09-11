
import Helmet from 'react-helmet'
import {Fundo, Content, Informacoes, Formulario} from './styles'

import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import api from '../../services/api';



import logo from '../../assets/logo_semfundo.png';

function RegisterUser(){
    const [user_name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const [user_whatsapp, setWhatsapp] = useState('');
    const [user_city, setCity] = useState('');
    const [user_uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();

        const data = {
            user_email,
            user_password,
            user_name,
            user_whatsapp,
            user_city,
            user_uf 
        }

        try{
            const response = await api.post('users', data);

            alert(`Cadastro realizado com sucesso! ${user_name}`);
            history.push('/loginuser');
        }catch(err){
            alert(`Erro no cadastro, usuario já cadastrado,tente novamente`);
        }


    }


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
                <form className="form" onSubmit={handleRegister}>
                    <h1>Preencha com os dados do colaborador</h1>
                    <input 
                    placeholder="Nome completo" required
                    value={user_name}
                    onChange={ e => setName(e.target.value)}
                    />
                    <input type = "tel"
                    pattern="[0-9]{11}"
                    placeholder="Telefone (Whatsapp)" required
                    value={user_whatsapp}
                    onChange={ e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                    <input 
                    placeholder="Cidade"
                    value={user_city}
                    onChange={ e => setCity(e.target.value)}
                    />
                    <input 
                    placeholder="UF" required maxLength="2" style={{ width: 80 }}
                    value={user_uf}
                    onChange={ e => setUf(e.target.value)}
                    />
                    </div>
                    <input 
                    placeholder="E-mail" required type="email" 
                    value={user_email}
                    onChange={ e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Senha" required type="password"
                    value={user_password}
                    onChange={ e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </Formulario>
            </Content>
        </Fundo>
    );
};

export default RegisterUser;