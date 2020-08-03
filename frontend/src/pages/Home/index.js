import React from 'react';

/*import './styles.css';*/
import {Fundo, Content, Banner, QmSomos} from './styles'

import { Link } from 'react-router-dom';

import banner from '../../assets/banner.png';
import quemSomos from '../../assets/quemSomos.png';
import aboutBanner from '../../assets/aboutBanner.png';


function Login(){
    

    return (
        <Fundo>
            <Content>
                <Banner>
                    <img src={banner} alt="bannner" className="banner"/>
                </Banner>
                <div className="bemVindo">
                    <h1>Bem vindo ao Look For!</h1>
                    <h2>A plataforma que nos une em prol do bem estar animal</h2>
                    
                </div>
                <div className="btnBemVindo">
                    
                    <button type="submit" >
                        <Link to="/loginong" style={{ textDecoration: 'none', color: 'white' }}>
                            ONG
                        </Link>
                    </button>
                        
                    
                    <button type="submit" className="buttonUser">
                        <Link to="/loginuser" style={{ textDecoration: 'none', color: 'white' }}>
                            Colaborador
                        </Link>
                    </button>
                </div>
                <QmSomos>
                    <div className="aboutUs">
                        <img src={quemSomos} alt="quemSomos"/>
                    </div>
                    <div className="aboutUsContent">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <img src={aboutBanner} alt="aboutBanner"/>
                    </div>
                    
                </QmSomos>
            </Content>
            
        </Fundo>
        
    );
};

export default Login;