import React from 'react';
import {Link} from 'react-router-dom';

import {Fundo, Content, Header, Card, CardAnimale} from './styles'
import { FiMapPin, FiUser, FiImage, FiArrowLeft } from 'react-icons/fi';
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';


function CardAnimal(){
    return (
        <Fundo>
            <Helmet title="Animal Perdido" />
            <Content>
                <Header>
                    <img src={logo} alt="LookFor" className="logoDash" />
                    <div className="info">
                        <FiArrowLeft size={16} color="#463B88" />
                        <Link className="link" to ="/dashboarduser">Voltar para página inicial</Link>
                        <FiUser className="menu" size={48} color="#463B88" />              
                        
                    </div>  
                </Header>
                <Card>
                        <CardAnimale>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                                
                            </div>
                            <div className="descricao">
                                <h1>Animal Teste</h1>
                                <p>Nome do autor</p>
                                <p>Telefone: WHATS-APP</p>
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
                        </CardAnimale>
                </Card>
            </Content>
        </Fundo>
    );
};

export default CardAnimal;