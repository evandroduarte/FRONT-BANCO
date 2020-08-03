import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


/*import './styles.css';*/
import {Fundo, Content} from './styles'

import foruser from '../../assets/forhelpers.png';

function LoginONG(){
    return (
        <Fundo>
            <Content>
                
                <img src={foruser} alt="bannner" className="banner"/>
                    <form>
                        <input placeholder="E-mail" />
                        <input placeholder="Senha" />
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