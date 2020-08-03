import React from 'react';


/*import './styles.css';*/

import {Fundo, Content, Informacoes, Formulario} from './styles'
import { FiUpload } from 'react-icons/fi';
import logo from '../../assets/logo_semfundo.png';

function LoginONG(){
    return (
        <Fundo>
            <Content>
                <Informacoes>
                    <section>
                            <img src={logo} alt="bannner" className="banner"/>
                            <h1>Faça o cadastro da sua ONG</h1>
                            <p>Realize seu cadastro na plataforma e contribua para a causa do bem estar animal</p> 
                            <p>    - Publique a causa da sua ONG</p> 
                            <p>    - Receba ajuda da comunidade da plataforma </p>
                            <p>    - Ajude os animais perdidos a encontrarem seus donos </p>
                    </section>
                </Informacoes>
                <Formulario>
                    <form className="form">
                        <h2>Preencha com os dados da ONG</h2>
                        <input placeholder="Nome da ONG" required/>
                        <input placeholder="Descrição" required/>
                        <div>
                        <input className="input-end" placeholder="Endereço" required/>
                        <input className="input-num" placeholder="N°" required/>
                        <input className="input-comp" placeholder="Complemento" />
                        <input className="input-cep" placeholder="CEP"/>
                        <input className="input-city" placeholder="Cidade"/>
                        <input className="input-uf" placeholder="UF" required maxLength="2" />
                        </div>
                        <input placeholder="Telefone (Whatsapp)" required maxLength="11" />
                        <input placeholder="E-mail" required type="email" />
                        <input placeholder="Senha" required type="password"/>
                        
                        
                        <label class="custom-file-upload">
                            <input type="file" accept="image/png, image/jpeg"/>
                            <FiUpload size={48} color="#463B88" />
                            <h2>Selecione uma foto de perfil</h2>
                        </label>
                        
                        
                        
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </Formulario> 
            </Content>
        </Fundo>
    );
};

export default LoginONG;