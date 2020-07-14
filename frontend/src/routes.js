import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import LoginONG from './pages/LoginONG';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/loginong" component={LoginONG} />
            </Switch>
        </BrowserRouter>
    )
}