import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import LoginONG from './pages/LoginONG';
import LoginUser from './pages/LoginUser';
import RegisterONG from './pages/RegisterONG';
import RegisterUser from './pages/RegisterUser';
import RegisterLostAnimal from './pages/RegisterAnimal';
import DashboardUser from './pages/DashboardUser';
import DashboardOng from './pages/DashboardOng';
import RegisterCausa from './pages/RegisterCausa';
import CardAnimal from './pages/CardAnimal';
import CardCausa from './pages/CardCausa';

import PainelAdm from './pages/PainelAdm';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" component={PainelAdm}/>
            {/* <Route path="/" exact component={Home} />
            <Route path="/loginong" component={LoginONG} />
            <Route path="/loginuser" component={LoginUser} />
            <Route path="/registerong" component={RegisterONG} />
            <Route path="/registeruser" component={RegisterUser} />
            <Route path="/registeranimal" component={RegisterLostAnimal} />
            <Route path="/dashboarduser" component={DashboardUser} />
            <Route path="/dashboardong" component={DashboardOng} />
            <Route path="/registercausa" component={RegisterCausa} />
            <Route path="/cardanimal" component={CardAnimal} />
            <Route path="/cardcausa" component={CardCausa} /> */}
            </Switch>
        </BrowserRouter>
    )
}