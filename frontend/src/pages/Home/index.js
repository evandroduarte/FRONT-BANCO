import React, { useState } from 'react';

/*import './styles.css';*/
import {Fundo, Content, Banner, QmSomos, CausasTitulo, Listagem, CardONG, CardAnimal, CasosAnimal, CasosONG} from './styles';


import { Link, useHistory } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';

import banner from '../../assets/banner.png';
import quemSomos from '../../assets/quemSomos.png';
import aboutBanner from '../../assets/aboutBanner.png';
import causasOngs from '../../assets/causasongs.png';
import animaisPerdidos from '../../assets/animaisperdidos.png';
import causasTitulo from '../../assets/causastitulo.png';
import api from '../../services/api';
import { useEffect } from 'react';


function Login(){

        const [incidents, setIncidents] = useState([]);
        const [lostanimals, setLostAnimals] = useState([]);

        const history = useHistory();
        
        useEffect(() => {
            api.get('lostanimals').then(response => {
                setLostAnimals(response.data);
            })
        }, []);


        useEffect(() => {
            api.get('donationrequest').then(response => {
                setIncidents(response.data);
            })
        }, []);

        function handleLogout() {
            localStorage.clear();
        
            history.push('/');
          }


        function formatDate (input) {
            var datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];
          
            return day+'/'+month+'/'+year;
          }

    return (
        <Fundo>
            <Content>
                <Banner>
                    <img src={banner} alt="bannner" className="banner"/>
                </Banner>
                <div className="bemVindo">
                    <h1>Bem vindo ao Look For!</h1>
                    <p className="subTitulo">A plataforma que nos une em prol do bem estar animal</p>
                    
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

                <CausasTitulo>
                    <img src={causasTitulo} alt="Titulo"/>
                </CausasTitulo>

                <Listagem>
                    
                    <CasosAnimal>
                        <img src={animaisPerdidos} alt="Animais Perdidos" className="titulos" />
                        <ul className="list">
                            {lostanimals.map(lostanimal => (
                                <li key = {lostanimal.LA_id}>
                                <CardAnimal>
                                        <div className="media">
                                        <img src={(lostanimal.LA_image).replace('uploads', 'http://localhost:3333')} className="imagem" alt="Lost Animal"/>
                                        </div>
                                <div className="descricao">
                                <p>{lostanimal.LA_description}</p>
                                <h3>{formatDate(lostanimal.LA_date)}</h3>
                                <div className="localizacao">
                                    <FiMapPin size={16} color="#463B88" /> 
                                    <h4>Localização</h4>
                                </div>
                            </div>
                        </CardAnimal>
                                </li>
                            ))}
                        </ul>
                    </CasosAnimal>
                    <CasosONG>
                        <img src={causasOngs} alt="Causas Ongs" className="titulos" />
                        <ul>
                            {incidents.map(incident => (
                                <li key = {incident.DR_id}>
                                <CardONG>
                                    <div className="media">
                                <img src = {(incident.ong_image).replace('uploads', 'http://localhost:3333')} className="imagem" alt= "Ong"/>
                                    </div>
                                <div className="descricao">
                                <h1>{incident.ong_name}</h1>
                                <p>{incident.DR_description}</p>
                                <h4>{formatDate(incident.DR_date)}</h4>
                                <div className="localizacao">
                                    <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.DR_money)}</h3>
                                </div>
                            </div>
                        </CardONG>
                                </li>
                            ))}
                        </ul>
                    </CasosONG>
                </Listagem>
            </Content>
            
        </Fundo>
        
    );
};

export default Login;