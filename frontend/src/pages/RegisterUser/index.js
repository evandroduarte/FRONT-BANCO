import React from 'react';



import logo from '../../assets/logo_semfundo.png';

function RegisterUser(){
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

                <form className="form">
                    <h1>Preencha com os dados da ONG</h1>
                    <input placeholder="Nome completo" required/>
                    <input placeholder="Telefone (Whatsapp)" required/>
                    <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" required maxLength="2" style={{ width: 80 }} />
                    </div>
                    <input placeholder="E-mail" required type="email" />
                    <input placeholder="Senha" required type="password"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </div>
                </div>
    );
};

export default RegisterUser;