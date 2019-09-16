import './main.scss'
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'mobx-react';

import Routs from "./stores/routs";


ReactDOM.render(
    (<Provider>
        <Router>
            {renderRoutes(Routs)}
        </Router>
    </Provider>), document.getElementById('root'
    ));