import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import LoginONG from './pages/LoginONG';
import RegisterONG from './pages/RegisterONG';
import RegisterUser from './pages/RegisterUser';
import RegisterLostAnimal from './pages/RegisterLostAnimal';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/loginong" component={LoginONG} />
            <Route path="/registerong" component={RegisterONG} />
            <Route path="/registeruser" component={RegisterUser} />
            <Route path="/registeranimal" component={RegisterLostAnimal} />
            </Switch>
        </BrowserRouter>
    )
}