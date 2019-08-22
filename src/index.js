import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './welcome/welcome';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome}/>
        </Switch>
    </ BrowserRouter>, 
document.getElementById('root')
);