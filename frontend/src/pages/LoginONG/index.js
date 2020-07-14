import React from 'react';

import './styles.css';

import forongs from '../../assets/forongs.png';

function LoginONG(){
    return (
        <div className="logon-container">
            <section className="form">
            <img src={forongs} alt="bannner" className="banner"/>
                <form>
                    <div className="buttons">
                    </div>
                </form>
                </section>
                </div>
    );
};

export default LoginONG;