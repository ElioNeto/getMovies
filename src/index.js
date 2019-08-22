import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './welcome/welcome';
import MyRequest from './Request/request';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome}/>
            <Route path="/request" component={MyRequest}/>
        </Switch>
    </ BrowserRouter>, 
document.getElementById('root')
);