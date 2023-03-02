import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/style.css';

let container = document.getElementById('root');
let root = createRoot(container);
root.render( 
        <Router>
            <App / >
        </Router> 
        );

serviceWorker.unregister();