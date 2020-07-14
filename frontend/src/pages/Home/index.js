import React from 'react';

import './styles.css';

import banner from '../../assets/banner.png';
import quemSomos from '../../assets/quemSomos.png';
import aboutBanner from '../../assets/aboutBanner.png';


function Login(){
    return (
        <div className="logon-container">
            <section className="form">
            <img src={banner} alt="bannner" className="banner"/>
                <form>
                    <h1>Bem vindo ao Look For!</h1>
                    <h2>A plataforma que nos une em prol do bem estar animal</h2>
                    <div className="buttons">
                    <button type="submit" className="buttonONG">Espaço ONG</button>
                    <button type="submit" className="buttonUser">Espaço Usuário</button>
                    </div>
                </form>
            <img src={quemSomos} alt="quemSomos"/>
            <div className="quemSomos">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            <img src={aboutBanner} alt="aboutBanner"/>
            </div>
            </section>
        </div>
    );
};

export default Login;