import React from 'react';

/*import './styles.css';*/
import {Fundo, Content, Banner, QmSomos, CausasTitulo, Listagem, CardONG, CardAnimal, CasosAnimal, CasosONG} from './styles';


import { Link } from 'react-router-dom';
import { FiMapPin, FiImage, FiDollarSign } from 'react-icons/fi';

import banner from '../../assets/banner.png';
import quemSomos from '../../assets/quemSomos.png';
import aboutBanner from '../../assets/aboutBanner.png';
import causasOngs from '../../assets/causasongs.png';
import animaisPerdidos from '../../assets/animaisperdidos.png';
import causasTitulo from '../../assets/causastitulo.png';


function Login(){
    

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
                        <CardAnimal>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>Animal Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiMapPin size={16} color="#463B88" /> 
                                    <h4>Localização</h4>
                                </div>
                            </div>
                        </CardAnimal>
                        <CardAnimal>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>Animal Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiMapPin size={16} color="#463B88" /> 
                                    <h4>Localização</h4>
                                </div>
                            </div>
                        </CardAnimal>
                        <CardAnimal>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>Animal Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiMapPin size={16} color="#463B88" /> 
                                    <h4>Localização</h4>
                                </div>
                            </div>
                        </CardAnimal>
                    </CasosAnimal>
                    <CasosONG>
                        <img src={causasOngs} alt="Causas Ongs" className="titulos" />
                        <CardONG>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>ONG Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiDollarSign size={16} color="#463B88" /> 
                                    <h4>Valor</h4>
                                </div>
                            </div>
                        </CardONG>
                        <CardONG>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>ONG Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiDollarSign size={16} color="#463B88" /> 
                                    <h4>Valor</h4>
                                </div>
                            </div>
                        </CardONG>
                        <CardONG>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                            </div>
                            <div className="descricao">
                                <h1>ONG Teste</h1>
                                <p>
                                    Descrição Descrição Descrição Descrição Descrição Descrição
                                    Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                                </p>
                                <h3>Data/Data/Data</h3>
                                <div className="localizacao">
                                    <FiDollarSign size={16} color="#463B88" /> 
                                    <h4>Valor</h4>
                                </div>
                            </div>
                        </CardONG>
                    </CasosONG>
                </Listagem>
            </Content>
            
        </Fundo>
        
    );
};

export default Login;