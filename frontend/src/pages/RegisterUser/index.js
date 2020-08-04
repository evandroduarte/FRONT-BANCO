import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


import logo from '../../assets/logo_semfundo.png';

function RegisterUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e){
        const data = {
            name,
            email,
            password,
            whatsapp,
            city,
            uf 
        }

        try{
            const response = await api.post('users', data);

            alert(`Cadastro realizado com sucesso! ${name}`);
            history.push('/loginuser');
        }catch(err){
            alert(`Erro no cadastro, tente novamente`);
        }


        e.preventDefault();
    }


    return (
        <div className="register-container">
            <div className="content">
            <section>
                <img src={logo} alt="bannner" className="banner"/>
                <h1>Faça o seu cadastro</h1>
                <p>Realize seu cadastro na plataforma e contribua para a causa do bem estar animal</p> 
                <p>    - Ajude as ONGs de proteção animal</p> 
                <p>    - Ajude os animais perdidos a encontrarem seus donos </p>
                </section>

                <form className="form" onSubmit={handleRegister}>
                    <h1>Preencha com os dados da ONG</h1>
                    <input 
                    placeholder="Nome completo" required
                    value={name}
                    onChange={ e => setName(e.target.value)}
                    />
                    <input 
                    placeholder="Telefone (Whatsapp)" required
                    value={whatsapp}
                    onChange={ e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                    <input 
                    placeholder="Cidade"
                    value={city}
                    onChange={ e => setCity(e.target.value)}
                    />
                    <input 
                    placeholder="UF" required maxLength="2" style={{ width: 80 }}
                    value={uf}
                    onChange={ e => setUf(e.target.value)}
                    />
                    </div>
                    <input 
                    placeholder="E-mail" required type="email" 
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Senha" required type="password"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </div>
                </div>
    );
};

export default RegisterUser;