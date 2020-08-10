import React from 'react';
import {Link} from 'react-router-dom';

import {Fundo, Content, Header, Card, CardONG} from './styles'
import { FiUser, FiImage, FiDollarSign, FiArrowLeft } from 'react-icons/fi';
import Helmet from 'react-helmet'
import logo from '../../assets/logo_semfundo.png';

function CardCausa(){
    return (
        <Fundo>
            <Helmet title="Doação ONG" />
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
                        <CardONG>
                            <div className="media">
                                <FiImage color="#463B88" className="imagem"/>
                                
                                
                            </div>
                            <div className="descricao">
                                <h1>Titulo da Causa</h1>
                                <p>Nome da ONG</p>
                                <p>Telefone: WHATS-APP</p>
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
                </Card>
            </Content>
        </Fundo>
    );
};

export default CardCausa;