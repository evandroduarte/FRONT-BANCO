import React from 'react';
import {Link} from 'react-router-dom';

import {Fundo, Content, Header, Listagem, CasosONG, CasosAnimal, CardAnimal, CardONG} from './styles'
import { FiMapPin, FiUser, FiImage, FiDollarSign } from 'react-icons/fi';
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';
import causasOngs from '../../assets/causasongs.png';
import animaisPerdidos from '../../assets/animaisperdidos.png';

function DashboardUser(){
    return (
        <Fundo>
            <Helmet title="Home" />
            <Content>
                <Header>
                    <img src={logo} alt="LookFor" className="logoDash" />
                    <div className="info">
                        <FiMapPin size={16} color="#463B88" />
                        <Link className="link" to ="/registeranimal">Cadastrar animal perdido</Link>
                        <FiUser className="menu" size={48} color="#463B88" />              
                        
                    </div>  
                </Header>
                <Listagem>
                    
                    <CasosAnimal>
                        <img src={animaisPerdidos} alt="Animais Perdidos" className="titulos" />
                        <CardAnimal>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardanimal">Ver Mais</Link></button>
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
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardanimal">Ver Mais</Link></button>
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
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardanimal">Ver Mais</Link></button>
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
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardcausa">Ver Mais</Link></button>
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
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardcausa">Ver Mais</Link></button>
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
                                <button type="submit"><Link style={{ textDecoration: 'none', color: 'white' }} to ="/cardcausa">Ver Mais</Link></button>
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

export default DashboardUser;