import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo_semfundo.png';


function Dashboard(){
    return (
        <div className="dashboard-container">
            <header>
                <img src={logo} alt="LookFor" className="logoDash" />
                <Link className="link" to ="/registeranimal">Cadastrar animal Perdido</Link>
            </header>
        </div>
    );
};

export default Dashboard;