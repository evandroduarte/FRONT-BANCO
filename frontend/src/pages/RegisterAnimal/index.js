import React from 'react';

import './styles.css';

import logo from '../../assets/logo_semfundo.png';

function Registeranimal(){
    return (
        <div className="register-container">
            <div className="content">
            <section>
                <img src={logo} alt="bannner" className="banner"/>
                <h1>Cadastrar Animal Perdido</h1>
                <p>Achou um animal perdido? Ou o seu se perdeu? Compartilhe 
                    conosco e nós vamos te ajudar Para isso, precisamos saber mais sobre o animal</p>
                </section>

                <form className="form">
                    <h1>Dados do Animal</h1>
                    <input placeholder="Animal" required />
                    <textarea placeholder="Descrição" required />
                    <input placeholder="Localização"/>
                    <input placeholder="Data" required type="date" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </div>
                </div>
    );
};

export default Registeranimal;