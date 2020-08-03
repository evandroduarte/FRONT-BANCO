import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


/*import './styles.css';*/
import {Fundo, Content} from './styles'

import forongs from '../../assets/forongs.png';

function LoginONG(){
    return (
        <div className="logon-container">
            <div className="content">
            <section className="form">
            <img src={forongs} alt="bannner" className="banner"/>
                <form>
                    <input placeholder="e-mail" />
                    <input placeholder="senha" />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="link">
                        <FiLogIn size={16} color="#463B88" />
                        Não tenho cadastro
                    </Link>
                </form>
                </section>
                </div>
                </div>
    );
};

export default LoginONG;