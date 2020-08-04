import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

/*import './styles.css';*/
import {Fundo, Content} from './styles'

import foruser from '../../assets/forhelpers.png';

function LoginONG(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('users/session', {email, password});

            console.log(response);

            localStorage.setItem('userName', response.data.name);

            history.push('/');
        }catch(err){
            alert('Falha no login');
        }
    }

    return (
        <Fundo>
            <Content>
                
                <img src={foruser} alt="bannner" className="banner"/>
                    <form onSubmit={handleLogin}>
                        <input 
                        placeholder="E-mail"
                        required 
                        value= {email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                        placeholder="Senha" 
                        required
                        type="password"
                        value= {password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                        <div className="cadastro">
                            <Link to="/register" className="btn">
                                <FiLogIn size={24} color="#463B88" />
                                Não tenho cadastro
                            </Link>
                        </div>
                    </form>
                    
            </Content>
        </Fundo>
    );
};

export default LoginONG;