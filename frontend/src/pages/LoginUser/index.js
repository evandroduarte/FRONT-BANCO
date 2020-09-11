import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

/*import './styles.css';*/
import {Fundo, Content} from './styles'
import Helmet from 'react-helmet'
import foruser from '../../assets/forhelpers.png';

function LoginUser(){
    
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('users/session', {user_email, user_password});

            //console.log(response);

            sessionStorage.setItem('userName', response.data.user_name);
            sessionStorage.setItem('userToken', response.data.user_token);
            sessionStorage.setItem('userId', response.data.user_id);

            history.push('/');
        }catch(err){
            alert('Falha no login');
        }
    }

    return (
        <Fundo>
            <Content>
                <Helmet title="Login Colaborador" />
                <img src={foruser} alt="bannner" className="banner"/>
                    <form onSubmit={handleLogin}>
                        <input 
                        placeholder="E-mail"
                        required 
                        value= {user_email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                        placeholder="Senha" 
                        required
                        type="password"
                        value= {user_password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                        <div className="cadastro">
                            <Link to="/registeruser" className="btn">
                                <FiLogIn size={24} color="#463B88" />
                                <p>Não tenho cadastro</p>
                            </Link>
                        </div>
                    </form>
                    
            </Content>
        </Fundo>
    );
};

export default LoginUser;