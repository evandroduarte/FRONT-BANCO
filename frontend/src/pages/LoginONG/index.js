import api from '../../services/api';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


/*import './styles.css';*/
import {Fundo, Content} from './styles'
import Helmet from 'react-helmet'
import forongs from '../../assets/forongs.png';

function LoginONG(){

    const [ong_email, setEmail] = useState('');
    const [ong_password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', {ong_email, ong_password});

            //console.log(response);

            sessionStorage.setItem('ongName', response.data.ong_name);
            sessionStorage.setItem('ongToken', response.data.ong_token);
            sessionStorage.setItem('ongId', response.data.ong_id);

            history.push('/');
        }catch(err){
            alert('Falha no login');
        }
    }



    return (
        <Fundo>
            <Content>
                <Helmet title="Login ONG" />
                <img src={forongs} alt="bannner" className="banner"/>
                    <form onSubmit={handleLogin}>
                        <input 
                        placeholder="E-mail" 
                        required
                        value={ong_email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                        placeholder="Senha"
                        required
                        type="password"
                        value={ong_password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                        <div className="cadastro">
                            <Link to="/registerong" className="btn">
                                <FiLogIn size={24} color="#463B88" />
                                <p>Minha ONG não tem cadastro</p>
                            </Link>
                        </div>
                    </form>
                    
            </Content>
        </Fundo>
    );
};

export default LoginONG;