import React, { useState } from 'react';
/*import './styles.css';*/

import {Fundo, Content, Informacoes, Formulario} from './styles'
import { FiUpload } from 'react-icons/fi';
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


function RegisterONG(){

    const [ong_email, setEmail] = useState('');
    const [ong_password, setPassword] = useState('');
    const [ong_name, setName] = useState('');
    const [ong_whatsapp, setWhatsapp] = useState('');
    const [ong_description, setDescription] = useState('');
    const [ong_image, setImage] = useState('');
    const [ong_city, setCity] = useState('');
    const [ong_uf, setUf] = useState('');
    const [ong_cep, setCep] = useState('');
    const [ong_street, setStreet] = useState('');
    const [ong_number, setNumber] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        try{
            const form = document.forms[0];
            var formData = new FormData(form);
            
            const response = await api.post('ongs', formData);

            alert(`Cadastro realizado com sucesso!`);
            console.log(response);
            history.push('/loginuser');
        }catch(err){
            console.log(err);
            alert(`Erro no cadastro, usuario já cadastrado,tente novamente`);
        }
    }

    return (
        <Fundo>
            <Content>
                <Informacoes>
                    <Helmet title="Cadastro ONG" />
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
                    <form className="form" id="form" name="form" onSubmit={handleRegister}>
                        <h2>Preencha com os dados da ONG</h2>
                        <input
                        //pattern="[a-zA-Z]+" 
                        placeholder="Nome da ONG" 
                        required
                        value={ong_name}
                        onChange={ e => setName(e.target.value)}
                        name="ong_name"
                        id="ong_name"
                        />
                        <input 
                        placeholder="Descrição" 
                        required
                        value={ong_description}
                        onChange={ e => setDescription(e.target.value)}
                        name="ong_description"
                        id="ong_description"
                        />
                        <div>
                        <input 
                        className="input-end" 
                        placeholder="Rua" 
                        required
                        value={ong_street}
                        onChange={ e => setStreet(e.target.value)}
                        name="ong_street"
                        id="ong_street"
                        />
                        <input
                        //pattern="[0-9]+" 
                        className="input-num" 
                        placeholder="N°" 
                        required
                        value={ong_number}
                        onChange={ e => setNumber(e.target.value)}
                        name="ong_number"
                        id="ong_number"
                        />
                        <input
                        //pattern="[0-9]{8}" 
                        className="input-cep" 
                        placeholder="CEP"
                        value={ong_cep}
                        onChange={ e => setCep(e.target.value)}
                        name="ong_cep"
                        id="ong_cep"
                        />
                        <input
                        //pattern="[A-Za-z]*" 
                        className="input-city" 
                        placeholder="Cidade"
                        value={ong_city}
                        onChange={ e => setCity(e.target.value)}
                        name="ong_city"
                        id="ong_city"
                        />
                        <input 
                        className="input-uf" 
                        placeholder="UF" 
                        required maxLength="2" 
                        value={ong_uf}
                        onChange={ e => setUf(e.target.value)}
                        name="ong_uf"
                        id="ong_uf"
                        />
                        </div>
                        <input 
                        placeholder="Telefone (Whatsapp)" 
                        required type = "tel"
                        //pattern="[0-9]{11}" 
                        value={ong_whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}
                        name="ong_whatsapp"
                        id="ong_whatsapp"
                        />
                        <input 
                        placeholder="E-mail" 
                        required type="email" 
                        value={ong_email}
                        onChange={ e => setEmail(e.target.value)}
                        name="ong_email"
                        id="ong_email"
                        />
                        <input 
                        placeholder="Senha" 
                        required type="password"
                        value={ong_password}
                        onChange={ e => setPassword(e.target.value)}
                        name="ong_password"
                        id="ong_password"
                        />
                        
                        <label className="custom-file-upload">
                            <input type="file" accept="image/png, image/jpeg" 
                            onChange={ e => setImage(e.target.files[0])} 
                            name="ong_image" 
                            id="ong_image"/>
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

export default RegisterONG;