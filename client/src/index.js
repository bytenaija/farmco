import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap"
import { BrowserRouter, Route } from 'react-router-dom';
let axios = require('axios');
ReactDOM.render(( 
                <BrowserRouter>
                <div>
                    <Route exact path="/" component={App} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin/login" component={Login} />
                   
                </div>
            
                </BrowserRouter>), 
            document.getElementById('root')); registerServiceWorker();