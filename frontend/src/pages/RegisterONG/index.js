import React from 'react';


import './styles.css';

import logo from '../../assets/logo_semfundo.png';

function LoginONG(){
    return (
        <div className="register-container">
            <div className="content">
            <section>
                <img src={logo} alt="bannner" className="banner"/>
                <h1>Faça o cadastro da sua ONG</h1>
                <p>Realize seu cadastro na plataforma e contribua para a causa do bem estar animal</p> 
                <p>    - Publique a causa da sua ONG</p> 
                <p>    - Receba ajuda da comunidade da plataforma </p>
                <p>    - Ajude os animais perdidos a encontrarem seus donos </p>
                </section>

                <form className="form">
                    <h1>Preencha com os dados da ONG</h1>
                    <input placeholder="Nome da ONG" required/>
                    <input placeholder="Descrição" required/>
                    <div className="input-group">
                    <input placeholder="Endereço" required/>
                    <input placeholder="N°" required style={{ width: 80 }}/>
                    </div>
                    <input placeholder="Complemento" />
                    <input placeholder="CEP"/>
                    <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" required maxLength="2" style={{ width: 80 }} />
                    </div>
                    <input placeholder="Telefone (Whatsapp)" required maxLength="11" />
                    <input placeholder="E-mail" required type="email" />
                    <input placeholder="Senha" required type="password"/>
                    <h1>Selecione uma foto de perfil</h1>
                    <input type="file" accept="image/png, image/jpeg"></input>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </div>
                </div>
    );
};

export default LoginONG;