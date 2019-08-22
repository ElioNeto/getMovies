import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './welcome/welcome';
import MyRequest from './Request/request';
import ToDo from './ToDo/todo';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome}/>
            <Route path="/request" component={MyRequest}/>
            <Route path="/todo" component={ToDo}/>
        </Switch>
    </ BrowserRouter>, 
document.getElementById('root')
);