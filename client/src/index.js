import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap"
ReactDOM.render(( 
                <BrowserRouter>
                    <App />
                </BrowserRouter>), 
            document.getElementById('root')); registerServiceWorker();